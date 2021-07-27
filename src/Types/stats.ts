import { StatKey } from "./artifact";
import { ArtifactSetKey, ElementKey, HitModeKey, ReactionModeKey, SlotKey } from "./consts";

type Flat = number
type Percent = number

/** Stats that are not affected by artifacts */
export interface BasicStats {
  characterKey: string, weaponType: string
  hitMode: HitModeKey, reactionMode: ReactionModeKey | null
  weapon: {
    key: string;
    refineIndex: number;
  }

  characterHP: Flat, characterDEF: Flat, characterATK: Flat
  characterEle: ElementKey, characterLevel: number
  infusionSelf?: ElementKey, infusionAura: ElementKey | ""
  enemyLevel: number, enemyDEFRed_: Percent
  weaponATK: Flat

  constellation: number;
  ascension: number;
  tlvl: {
    auto: number;
    skill: number;
    burst: number;
  }

  conditionalValues: ConditionalValues
  mainStatAssumptionLevel: number
}

/**
 * Technically, `ICalculatedStats` still wouldn't have all fields from BonusStats.
 * Though, all required stats would already be included during dependency calculation
 * and preprocessing.
 */
export type ICalculatedStats = BasicStats & Required<BonusStats> & {
  modifiers?: Modifier
  equippedArtifacts?: StrictDict<SlotKey, string>
  setToSlots: Dict<ArtifactSetKey, SlotKey[]>
} & {
  [key: string]: number
}

/** Stats that can be increased from artifacts */
export type BonusStats = {
  [key in StatKey]?: number
} & {
  infusionSelf?: ElementKey
  modifiers?: {
    [key1: string]: {
      [key2: string]: number | undefined
    } | undefined
  }
}

type ConditionalValues = {
  artifact?: any
  character?: any
  weapon?: any
}

export interface Modifier {
  [key: string]: {
    [key: string]: number
  }
}