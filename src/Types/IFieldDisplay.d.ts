import { BasicStats, ICalculatedStats } from "./stats";

export interface IFieldDisplay {
  canShow?: (stats: BasicStats) => boolean;
  text: Displayable;
  value?: number | Displayable | ((stats: IBasicStats) => number | Displayable);
  fixed?: number;
  formula?: (stats: BasicStats) => Array<any>;
  formulaText?: JSX.Element | ((stats: IBasicStats) => JSX.Element)
  variant?: string | ((stats: IBasicStats) => string);
  unit?: Displayable
}