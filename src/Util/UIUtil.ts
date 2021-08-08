export function valueString(value: number, unit: string, options: Options = {}): string {
  switch (unit) {
    case "%": return (Math.round(value * 10) / 10).toFixed(1) + (options.excludePercents ? "" : "%")
    case "eff": return value.toFixed(2) + (options.excludePercents ? "" : "%")
    default: return Math.round(value).toFixed(0)
  }
}

type Options = {
  excludePercents?: boolean
}