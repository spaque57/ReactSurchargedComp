import * as React from 'react';
import { ISpinnerStyles, Spinner } from 'office-ui-fabric-react';
import { ECustomSpinnerLabelPosition, ECustomSpinnerPosition, PropsCustomSpinner } from './ICustomSpinner';
import layoutStyles from './customSpinnerLayout.module.scss';

const spinnerStyle: ISpinnerStyles = {
  label: {
    color: 'black'
  }
};

const CustomSpinner: React.FunctionComponent<PropsCustomSpinner> = (props) => {
  // Position
  let position = '5px';
  if (props.spinnerOptions.position != null && props.spinnerOptions.position != '') {
    if (props.spinnerOptions.position == ECustomSpinnerPosition.center) position = '125px';
    if (props.spinnerOptions.position == ECustomSpinnerPosition.bottom) position = '450px';
  }

  // Labe position
  let labelPosition = ECustomSpinnerLabelPosition.bottom;
  if (props.spinnerOptions.labelPosition != null && props.spinnerOptions.labelPosition != '') labelPosition = ECustomSpinnerLabelPosition[props.spinnerOptions.labelPosition];

  // Spinner size
  let size = 2;
  if (props.spinnerOptions.size != null && props.spinnerOptions.size >= 0 && props.spinnerOptions.size <= 3) size = props.spinnerOptions.size;

  return (
    <>
      {props.spinnerOptions.showSpinner ? (
        <div className={layoutStyles.loadingSpinner} style={{ top: position }}>
          <Spinner label={props.spinnerOptions.label} size={size} labelPosition={labelPosition} style={{ padding: '10px' }} styles={spinnerStyle} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CustomSpinner;
