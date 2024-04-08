import * as React from 'react';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { INumberInputProps } from './INumberInputProps';
import { round } from '../../services/sharedFunctions';
import { updateNumberInputData } from '../../services/inputService';
import styles from './numberInput.module.scss';

const NumberInput = <T,>(props: INumberInputProps<T>) => {
  // testing suffix that not require a 's'
  let internalSuffix = 's';
  const isNotPluralWord = props.suffix === '' || props.suffix === ' %' || props.suffix === ' mois' || props.suffix === ' m²' || props.suffix === ' €' ? true : false;
  const isWordX = props.suffix === ' niveau' ? true : false;

  // input prevent error
  let inputValue = 0;
  if (props.defaultValue != null) inputValue = props.defaultValue;

  let defaultValue = inputValue.toString() + ' ' + props.suffix;
  if (inputValue > 1 && !isNotPluralWord && !isWordX) {
    defaultValue = defaultValue + internalSuffix;
  } else if (inputValue > 1 && !isNotPluralWord && isWordX) {
    internalSuffix = 'x';
    defaultValue = defaultValue + internalSuffix;
  }

  // min/max value
  let minValue = -1; // if props.min = -1 --> no min value
  if (props.min != null && props.min != undefined) minValue = props.min;
  let maxValue = 0; // if props.max = 0 --> no max value
  if (props.max != null && props.max != undefined) maxValue = props.max;

  function convertValueToFloat(stringValue: string): number {
    const rem = stringValue.replace(/,/g, '.');
    const remvalue = rem.replace(/[^0-9.]/g, '');
    const intValue: number = parseFloat(remvalue);
    return intValue;
  }

  function _hasSuffix(value: string, suffix: string): boolean {
    const suffixP: string = suffix + internalSuffix;
    const subString = value.substr(value.length - suffix.length);
    const subStringPuriel = value.substr(value.length - suffixP.length);

    if (subString === suffix || subStringPuriel === suffixP) {
      return true;
    } else {
      return false;
    }
  }

  function _removeSuffix(value: string, suffix: string): string {
    if (!_hasSuffix(value, suffix)) {
      return value;
    }
    return value.substr(0, value.length - suffix.length);
  }

  return (
    <SpinButton
      disabled={props.isReadOnly}
      className={styles.noWidthInput}
      step={props.increment}
      min={minValue}
      max={maxValue}
      value={defaultValue}
      onValidate={(value: string) => {
        value = _removeSuffix(value, props.suffix);
        const intValue: number = convertValueToFloat(value);
        let newIntValue = round(intValue, 2);

        // checking min value
        if (newIntValue < minValue && minValue > -1) newIntValue = minValue;
        // checking max value
        if (newIntValue > maxValue && maxValue > 0) newIntValue = maxValue;

        let result = newIntValue + ' ' + props.suffix;
        if (!isNotPluralWord && newIntValue > 1) {
          result = result + internalSuffix;
        }

        // update value
        if (!props.isReadOnly) {
          updateNumberInputData(newIntValue, props.currentObject, props.setter, props.propertyName);
          return result;
        }
      }}
      onIncrement={(value: string) => {
        value = _removeSuffix(value, props.suffix);
        const intValue: number = convertValueToFloat(value);
        let newIntValue = round(intValue + props.increment, 2);

        // checking min value
        if (newIntValue < minValue && minValue > -1) newIntValue = minValue;
        // checking max value
        if (newIntValue > maxValue && maxValue > 0) newIntValue = maxValue;

        let result = newIntValue + ' ' + props.suffix;
        if (!isNotPluralWord && newIntValue > 1) {
          result = result + internalSuffix;
        }

        // update value
        if (!props.isReadOnly) {
          updateNumberInputData(newIntValue, props.currentObject, props.setter, props.propertyName);
          return result;
        }
      }}
      onDecrement={(value: string) => {
        value = _removeSuffix(value, props.suffix);
        const intValue: number = convertValueToFloat(value);
        let newIntValue = round(intValue - props.increment, 2);

        // checking min value
        if (newIntValue < minValue && minValue > -1) newIntValue = minValue;
        // checking max value
        if (newIntValue > maxValue && maxValue > 0) newIntValue = maxValue;

        let result = newIntValue + ' ' + props.suffix;
        if (!isNotPluralWord && newIntValue > 1) {
          result = result + internalSuffix;
        }

        // update value
        if (!props.isReadOnly) {
          updateNumberInputData(newIntValue, props.currentObject, props.setter, props.propertyName);
          return result;
        }
      }}
      styles={{
        input: {
          width: props.isReadOnly ? '100%' : 'calc(100% - 14px);s'
        },
        arrowButtonsContainerDisabled: {
          display: 'none'
        }
      }}
    />
  );
};

export default NumberInput;
