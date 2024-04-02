import * as React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { ITrippleChoiceToggleInputProps } from './ITrippleChoiceToggleProps';
import styles from './trippleChoiceToggle.module.scss';
import { updateBoolInputData } from '../../services/inputService';

const TrippleChoiceToggle = <T,>(props: ITrippleChoiceToggleInputProps<T>) => {
  // Methods
  function setNewValue(ev: React.MouseEvent<HTMLElement, MouseEvent>, value: boolean) {
    updateBoolInputData(ev, value, props.currentObject, props.setter, props.propertyName);
  }

  // Load view
  return (
    <ToggleButtonGroup
      className={styles.trippleToggle}
      size='small'
      value={props.defaultValue}
      exclusive
      onChange={(ev: React.MouseEvent<HTMLElement, MouseEvent>, value: boolean) => {
        setNewValue(ev, value);
      }}>
      <ToggleButton value={true} disabled={props.isReadOnly} className={`${props.defaultValue != null && props.defaultValue ? styles.yesBgColor : ''}`}>
        {'Oui'}
      </ToggleButton>
      <ToggleButton value={null} disabled={true}></ToggleButton>
      <ToggleButton value={false} disabled={props.isReadOnly} className={`${props.defaultValue != null && !props.defaultValue ? styles.noBgColor : ''}`}>
        {'Non'}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TrippleChoiceToggle;
