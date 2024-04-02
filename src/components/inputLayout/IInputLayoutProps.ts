import { IComboBoxOption } from 'office-ui-fabric-react';

export interface PropsInputLayout<T> {
  component: string;
  layoutType: string;
  label: string;
  isReadOnly: boolean;

  // obj
  objValue: any;
  currentObj: T;
  objSetter: React.Dispatch<React.SetStateAction<T>>;
  objPropertyName: string;

  // Optionals
  isRequired?: boolean;
  // InfoMark
  hasIconMark?: boolean;
  infoMarkLabel?: string;
  infoMarkIconName?: string;
  infoMarkSize?: string;
  // Toogle spe
  onTextToogle?: string;
  offTextToogle?: string;
  // TrippleToogle
  isPrimaryColor?: string;
  // Number spe
  increment?: number;
  suffix?: string;
  min?: number;
  max?: number;
  // Combobox spe
  selectOptions?: Array<IComboBoxOption>;
}

// Inputlayout
export enum EInputLayoutType {
  oneLine = 'OL',
  veryVerySmallInputLine = 'VVSIL',
  verySmallInputLine = 'VSIL',
  smallInputLine = 'SIL',
  middleLine = 'ML',
  smallMiddleLine = 'SML',
  tierLine = 'TL',
  quarterLine = 'QL',
  smallLabel = 'SL',
  noLabel = 'NL'
}
export enum EInputType {
  NumberInput = 'NumberInput',
  SelectChoice = 'SelectChoice',
  SearchedDropdown = 'SearchedDropdown',
  ComboBox = 'ComboBox',
  DatePicker = 'DatePicker',
  TextField = 'TextField',
  Toogle = 'Toogle',
  TrippleToggle = 'TrippleToggle',
  PhoneNumber = 'PhoneNumber'
}
