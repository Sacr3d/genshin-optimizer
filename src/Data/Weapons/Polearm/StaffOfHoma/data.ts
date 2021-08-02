import { ISubFormula } from "../../../../Types/character";

const refinementVals_hp_atk = [0.8, 1, 1.2, 1.4, 1.6]
const refinementVals_hp_atk_add = [1, 1.2, 1.4, 1.6, 1.8]

const formula: ISubFormula = {
  esj: stats => [s => s.finalHP * refinementVals_hp_atk_add[stats.weapon.refineIndex] / 100, ['finalHP']],
  esj1: stats => [s => s.finalHP * refinementVals_hp_atk[stats.weapon.refineIndex] / 100, ['finalHP']]
}
export default formula
