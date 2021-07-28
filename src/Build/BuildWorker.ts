import '../WorkerHack'
import { PreprocessFormulas } from "../StatData";
import { artifactSetPermutations, artifactPermutations, pruneArtifacts, calculateTotalBuildNumber } from "./Build"
import { GetDependencies } from '../StatDependency';
import Formula from '../Formula';
import { IArtifact, StatKey } from '../Types/artifact';
import { ArtifactSetKey, SlotKey } from '../Types/consts';
import { Build, BuildRequest } from '../Types/Build';
import { ICalculatedStats } from '../Types/stats';

onmessage = async (e: { data: BuildRequest }) => {
  const t1 = performance.now()
  const { splitArtifacts, setFilters, minFilters = {}, maxFilters = {}, initialStats: stats, artifactSetEffects, maxBuildsToShow, optimizationTarget, ascending, turbo = false } = e.data

  let target: (stats) => number, targetKeys: string[]
  if (typeof optimizationTarget === "string") {
    target = (stats) => stats[optimizationTarget]
    targetKeys = [optimizationTarget]
  } else {
    const targetFormula = await Formula.get(optimizationTarget)
    if (typeof targetFormula === "function")
      [target, targetKeys] = targetFormula(stats)
    else {
      postMessage({ progress: 0, timing: 0 }, undefined as any)
      postMessage({ builds: [], timing: 0 }, undefined as any)
      return
    }
    if (targetKeys.length === 1) {
      // CAUTION: This optimization works only with monotonic dependencies
      const key = targetKeys[0]
      target = (stats) => stats[key]
    }
  }

  const dependencies = GetDependencies(stats.modifiers, [...targetKeys, ...Object.keys(minFilters), ...Object.keys(maxFilters)]) as StatKey[]
  const oldCount = calculateTotalBuildNumber(splitArtifacts, setFilters)

  let prunedArtifacts = splitArtifacts, newCount = oldCount
  if (turbo) {
    // Prune artifact with strictly inferior (relevant) stats.
    if (Object.keys(ascending ? minFilters : maxFilters).length === 0) {
      const prune = (alwaysAccepted: ArtifactSetKey[]) => Object.fromEntries(Object.entries(splitArtifacts).map(([key, values]) =>
        [key, pruneArtifacts(values as IArtifact[], artifactSetEffects, new Set(dependencies), ascending, new Set(alwaysAccepted))]))

      prunedArtifacts = prune([])
      newCount = calculateTotalBuildNumber(prunedArtifacts, setFilters)

      if (newCount < 1) {
        // over-pruned, try not to prune the set-filter
        prunedArtifacts = prune(setFilters.map(set => set.key) as any)
        newCount = calculateTotalBuildNumber(prunedArtifacts, setFilters)
      }
    }
  }

  let { initialStats, formula } = PreprocessFormulas(dependencies, stats)
  let builds: Build[] = [], threshold = -Infinity
  let buildCount = 0, skipped = oldCount - newCount

  const gc = () => {
    builds.sort((a, b) => (b.buildFilterVal - a.buildFilterVal))
    builds.splice(maxBuildsToShow)
  }

  const callback = (accu: StrictDict<SlotKey, IArtifact>, stats: ICalculatedStats) => {
    if (!(++buildCount % 10000)) postMessage({ progress: buildCount, timing: performance.now() - t1, skipped }, undefined as any)
    formula(stats)
    if (Object.entries(minFilters).some(([key, minimum]) => stats[key] < minimum)) return
    if (Object.entries(maxFilters).some(([key, maximum]) => stats[key] > maximum)) return
    let buildFilterVal = ascending ? -target(stats) : target(stats)
    if (buildFilterVal >= threshold) {
      builds.push({ buildFilterVal, artifacts: { ...accu } })
      if (builds.length >= 1000) {
        gc()
        threshold = builds[builds.length - 1].buildFilterVal
      }
    }
  }
  for (const artifactsBySlot of artifactSetPermutations(prunedArtifacts, setFilters))
    artifactPermutations(initialStats, artifactsBySlot, artifactSetEffects, callback)

  gc()

  // We present ONLY the top build on turbo. Many assumptions
  // break when we need to consider #2 and beyond.
  if (turbo) {
    builds = [builds[0]];
  }

  let t2 = performance.now()
  postMessage({ progress: buildCount, timing: t2 - t1, skipped }, undefined as any)
  postMessage({ builds, timing: t2 - t1, skipped }, undefined as any)
}
