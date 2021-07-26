import { ArtifactSetKey, ElementKey, HitModeKey, ReactionModeKey, SlotKey } from "./consts";

type Flat = number
type Percent = number

/** Stats that are not affected by artifacts */
export interface IBasicStats {
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

  mainStatAssumptionLevel: number

}
export type ICalculatedStats = IBasicStats & Partial<BonusStats> & {
  conditionalValues: ConditionalValues
  modifiers?: Modifier
  equippedArtifacts?: StrictDict<SlotKey, string>
  setToSlots: Dict<ArtifactSetKey, SlotKey[]>
} & {
  [key: string]: number
}

/** Stats that can be increased from artifacts */
export type BonusStats = {
  hp: Flat, hp_: Percent
  atk: Flat, atk_: Percent
  def: Flat, def_: Percent
  dmg_: Percent

  eleMas: Flat, enerRech_: Percent

  critRate_: Percent, critDMG_: Percent, weakspotDMG_: Percent

  heal_: Percent, incHeal_: Percent
  powShield_: Percent
  cdRed_: Percent, skillCDRed_: Percent, burstCDRed_: Percent
  moveSPD_: Percent, atkSPD_: Percent
  stamina: Flat, staminaDec_: Percent
  staminaSprintDec_: Percent, staminaGlidingDec_: Percent, staminaChargedDec_: Percent

  amplificative_dmg_: Percent, transformative_dmg_: Percent, crystalize_eleMas_: Percent, crystalize_dmg_: Percent, burning_dmg_: Percent
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