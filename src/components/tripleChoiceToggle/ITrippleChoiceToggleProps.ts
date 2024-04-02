export interface ITrippleChoiceToggleInputProps<T> {
  defaultValue: any;
  isReadOnly: boolean;
  isPrimaryColor: string;
  currentObject: T;
  setter: React.Dispatch<React.SetStateAction<T>>;
  propertyName: string;
}

// Toogle color
export enum ETripleToogleColor {
  default = 'default',
  colored = 'colored'
}
