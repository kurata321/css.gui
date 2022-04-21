import * as React from 'react'
import {
  AbsoluteLengthUnits,
  CSSUnitValue,
  Length,
  LengthUnit,
} from '../../types/css'
import { Label, Number, UnitSelect, ValueSelect } from '../primitives'
import { reducer } from './reducer'
import { State } from './types'

export type LengthInputProps = {
  value: Length
  label?: string
  property?: string
  onChange: (length: Length) => void
  min?: any
  max?: any
}
export const LengthInput = ({
  value: providedValue,
  onChange,
  label,
  property,
  min,
  max,
}: LengthInputProps) => {
  const id = React.useId()
  const fullId = `${id}-${property || 'length'}`
  const value: CSSUnitValue =
    providedValue === '0' ? { value: 0, unit: 'number' } : providedValue
  const [state, dispatch] = React.useReducer(reducer, {
    value: value?.value || AbsoluteLengthUnits.Px,
    unit: value?.unit || 0,
    key: 0,
    step: 1,
  } as State)
  React.useEffect(() => {
    if (state.value !== value?.value || state.unit !== value?.unit) {
      onChange({
        value: state.value,
        unit: state.unit,
      })
    }
  }, [state])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div sx={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
        <Label htmlFor={fullId} sx={{ marginRight: 1, minWidth: 16 }}>
          {label ?? 'Number'}
        </Label>
        <Number
          id={fullId}
          key={state.key}
          value={state.value}
          step={state.step}
          min={min ? min[state.unit] : null}
          max={max ? max[state.unit] : null}
          property={property}
          onChange={(newValue: number) => {
            dispatch({
              type: 'CHANGED_INPUT_VALUE',
              value: newValue,
            })
          }}
        />
      </div>
      <ValueSelect
        property={property}
        onChange={(e: any) => {
          dispatch({
            type: 'CHANGED_INPUT_VALUE',
            value: e.target.value
          })
        }}
      />
      <UnitSelect
        value={state.unit}
        property={property}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          dispatch({
            type: 'CHANGED_UNIT_VALUE',
            unit: e.target.value as LengthUnit,
          })
        }}
        sx={{ marginLeft: 1, minHeight: '1.6em', width: 72 }}
      />
    </div>
  )
}
