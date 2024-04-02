import { IComboBoxOption } from 'office-ui-fabric-react';

export interface IChoiceSelectProps<T> {
  value: string;
  label: string;
  isReadOnly: boolean;
  options: Array<IComboBoxOption>;
  currentObject: T;
  setter: React.Dispatch<React.SetStateAction<T>>;
  propertieName: string;
}
