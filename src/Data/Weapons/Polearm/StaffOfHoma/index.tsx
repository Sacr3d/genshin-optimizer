import { WeaponData } from 'pipeline'
import { IConditionals } from '../../../../Types/IConditional'
import { IWeaponSheet } from '../../../../Types/weapon'
import { KeyPath } from '../../../../Util/KeyPathUtil'
import { FormulaPathBase } from '../../../formula'
import data_gen from './data_gen.json'
import img from './Weapon_Staff_of_Homa.png'

const path = KeyPath<FormulaPathBase>().weapon.StaffOfHoma
const refinementVals_hp = [20, 25, 30, 35, 40]
const conditionals: IConditionals = {
  esj: {
    name: "HP < 50%",
    maxStack: 1,
    stats: {
      modifiers: { finalATK: [path.esj()] }
    }
  }
}
const weapon: IWeaponSheet = {
  ...data_gen as WeaponData,
  img,
  stats: stats => ({
    hp_: refinementVals_hp[stats.weapon.refineIndex],
    modifiers: { finalATK: [path.esj1()] }
  }),
  conditionals,
  document: [{
    conditional: conditionals.esj
  }],
}
export default weapon