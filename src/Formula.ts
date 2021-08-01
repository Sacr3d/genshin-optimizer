import { FormulaItem, IBaseStat } from './Types/character';
import { ICalculatedStats, Modifier } from './Types/stats';
import { resolve } from './Util/KeyPathUtil';
import { objPathValue } from './Util/Util';

export const formulaImport = import('./Data/formula').then(imp => {
  Formula.formulas = imp.default
  return imp.default
})

export default class Formula {
  constructor() { if (this instanceof Formula) throw Error('A static class cannot be instantiated.'); }
  static formulas: any = {}
  static get = (keys: string[]): Promise<((stats: ICalculatedStats) => any[]) | object | undefined> => formulaImport.then(formulas => objPathValue(formulas, keys))
  static computeModifier(stats: ICalculatedStats, modifier: Modifier | undefined): Partial<ICalculatedStats> {
    if (!modifier) return {}
    return Object.fromEntries(Object.entries(modifier).map(([key, formulas]) =>
      [key, formulas.reduce((ac, path) => ac + Formula.getCurrent(path)[0](stats), 0)]))
  }
  static getCurrent(path: string[]): (baseStat: IBaseStat) => FormulaItem {
    return resolve(Formula.formulas, path)
  }
}
