import * as React from 'react';
import { EInputType, PropsInputLayout } from './IInputLayoutProps';
import { MaskedTextField, TextField, Toggle } from 'office-ui-fabric-react';
import { updateBoolInputData, updateInputData } from '../../services/inputService';
import layoutStyles from './inputayout.module.scss';
import NumberInput from '../numberInput/numberInput';
import OneLineDatePicker from '../oneLineDatePicker/oneLineDatePicker';
import SelectChoice from '../selectChoice/selectChoice';
import TrippleChoiceToggle from '../tripleChoiceToggle/trippleChoiceToggle';
import SearchableDropdown from '../searchableDropdown/searchableDropdown';

const InputComponentView = <T,>(props: PropsInputLayout<T>) => {
  return (
    <>
      {props.component === EInputType.NumberInput ? (
        <NumberInput
          label=''
          isReadOnly={props.isReadOnly}
          suffix={props.suffix || ''}
          increment={props.increment || 1}
          defaultValue={props.objValue}
          currentObject={props.currentObj}
          setter={props.objSetter}
          propertyName={props.objPropertyName}
          min={props.min}
          max={props.max}
        />
      ) : (
        <></>
      )}
      {props.component === EInputType.DatePicker ? (
        <OneLineDatePicker
          label=''
          isReadOnly={props.isReadOnly}
          date={props.objValue}
          currentObject={props.currentObj}
          setter={props.objSetter}
          propertyName={props.objPropertyName}
        />
      ) : (
        <></>
      )}
      {props.component === EInputType.SearchedDropdown ? (
        <SearchableDropdown
          label=''
          isReadOnly={props.isReadOnly}
          value={props.objValue}
          options={props.selectOptions || []}
          currentObject={props.currentObj}
          setter={props.objSetter}
          propertieName={props.objPropertyName}
        />
      ) : (
        <></>
      )}
      {props.component === EInputType.SelectChoice ? (
        <SelectChoice
          label=''
          isReadOnly={props.isReadOnly}
          value={props.objValue}
          options={props.selectOptions || []}
          currentObject={props.currentObj}
          setter={props.objSetter}
          propertieName={props.objPropertyName}
        />
      ) : (
        <></>
      )}
      {props.component === EInputType.TextField ? (
        <TextField
          label=''
          value={props.objValue}
          name={props.objPropertyName}
          onChange={(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            updateInputData(e, props.currentObj, props.objSetter, 'string');
          }}
          underlined
          disabled={props.isReadOnly}
        />
      ) : (
        <></>
      )}
      {props.component === EInputType.PhoneNumber ? (
        <MaskedTextField
          label=''
          underlined
          mask='99 99 99 99 99'
          className={layoutStyles.inputNoBorder}
          name={props.objPropertyName}
          onChange={(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            updateInputData(e, props.currentObj, props.objSetter, 'string');
          }}
          value={props.objValue}
          disabled={props.isReadOnly}
        />
      ) : (
        <></>
      )}
      {props.component === EInputType.Toogle ? (
        <Toggle
          className={layoutStyles.inputShift}
          label=''
          inlineLabel={true}
          onText={props.onTextToogle}
          offText={props.offTextToogle}
          onChange={(ev: React.MouseEvent<HTMLElement, MouseEvent>, checked?: boolean) => {
            updateBoolInputData(ev, checked!, props.currentObj, props.objSetter, props.objPropertyName);
          }}
          checked={props.objValue}
          disabled={props.isReadOnly}
        />
      ) : (
        <></>
      )}
      {props.component === EInputType.TrippleToggle ? (
        <TrippleChoiceToggle
          isReadOnly={props.isReadOnly}
          defaultValue={props.objValue}
          currentObject={props.currentObj}
          setter={props.objSetter}
          propertyName={props.objPropertyName}
          isPrimaryColor={props.isPrimaryColor!}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default InputComponentView;
