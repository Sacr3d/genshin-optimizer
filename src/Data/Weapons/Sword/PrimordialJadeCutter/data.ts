import { ISubFormula } from "../../../../Types/character";

const refinementVals_hp_Atk = [1.2, 1.5, 1.8, 2.1, 2.4]

const formula: ISubFormula = {
  bonus: stats => [s => s.finalHP * refinementVals_hp_Atk[stats.weapon.refineIndex] / 100, ['finalHP']],
}
export default formula
