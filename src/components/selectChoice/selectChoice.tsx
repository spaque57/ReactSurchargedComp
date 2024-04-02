import * as React from 'react';
import styles from './selectChoice.module.scss';
import { IChoiceSelectProps } from './ISelectChoiceProps';
import { ComboBox, IComboBox, IComboBoxOption } from 'office-ui-fabric-react/lib/index';
import { updateComboboxInputData } from '../../services/inputService';

const SelectChoice = <T,>(props: IChoiceSelectProps<T>) => {
  return (
    <ComboBox
      className={styles.comboboxBackground}
      autoComplete='on'
      options={props.options}
      selectedKey={props.value}
      disabled={props.isReadOnly}
      onChange={(e: React.FormEvent<IComboBox>, option?: IComboBoxOption) => {
        updateComboboxInputData(e, option!, props.currentObject, props.setter, props.propertieName);
      }}
    />
  );
};

export default SelectChoice;
