import { WeaponData } from "../../pipeline";
import { SubstatKey } from "./artifact";
import { DocumentSection } from "./character";
import { Rarity, WeaponKey, WeaponTypeKey } from "./consts";
import { BonusStats } from "./stats";
import { IConditionals } from "./IConditional";


export type IWeaponSheets = Record<WeaponKey, IWeaponSheet>

export interface IWeaponSheet extends WeaponData {
  img: string;
  stats?: BonusStats | ((stats: IBasicStats) => BonusStats)
  conditionals?: IConditionals
  document: DocumentSection[],
}