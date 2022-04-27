import { Styles, Length, CSSUnitValue } from '../types/css'
import { stringifySelector, stringifyUnit } from './stringify'
import { has } from 'lodash-es'
import { isNestedSelector } from './util'
import { properties } from '../data/properties'

export const stringifyProperty = (
  property: string = '', // In the future the property might determine how we stringify
  value?: unknown
): Array<string | null> | string | number | null => {
  const stringify = properties[property].stringify
  if (stringify) {
    return stringify(value)
  }
  if (Array.isArray(value)) {
    // @ts-ignore
    return value.map((v: Length | string | null) =>
      stringifyProperty(property, v)
    )
  }

  if (!isCSSUnitValue(value)) {
    return String(value) ?? null
  }
  return stringifyUnit(value)
}

type StyleEntry = [string, Length | string | null | undefined]
export const toCSSObject = (styles: Styles): any => {
  // @ts-ignore
  return Object.entries(styles).reduce((acc: Styles, curr: StyleEntry) => {
    const [property, value] = curr
    if (isNestedSelector(property)) {
      return {
        ...acc,
        [stringifySelector(property)]: toCSSObject(value as Styles),
      }
    }
    return {
      ...acc,
      [property]: stringifyProperty(property, value),
    }
  }, {})
}

function isCSSUnitValue(value: unknown): value is CSSUnitValue {
  if (typeof value !== 'object') {
    return false
  }

  if (!has(value, 'value') || !has(value, 'unit')) {
    return false
  }

  return true
}
