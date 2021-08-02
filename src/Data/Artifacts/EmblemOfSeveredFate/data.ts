import { FormulaItem } from "../../../Types/character"

const formula = {
  s4: stats => [s => Math.min(s.enerRech_ * 0.25, 3), ["enerRech_"]] as FormulaItem
}
export default formula