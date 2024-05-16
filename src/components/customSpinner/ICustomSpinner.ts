export interface PropsCustomSpinner {
  spinnerOptions: ICustomSpinner;
}

export interface ICustomSpinner {
  label: string;
  position: string;
  labelPosition: string;
  size: number;
  showSpinner: boolean;
}

export enum ECustomSpinnerPosition {
  top = 'top',
  center = 'center',
  bottom = 'bottom'
}

export enum ECustomSpinnerSize {
  small = 0,
  medium = 1,
  large = 2,
  larger = 3
}

export enum ECustomSpinnerLabelPosition {
  right = 'right',
  left = 'left',
  top = 'top',
  bottom = 'bottom'
}
