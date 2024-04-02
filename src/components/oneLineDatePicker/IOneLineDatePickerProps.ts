export interface IOneLineDatePickerProps<T> {
  label: string;
  date: Date;
  propertyName: string;
  isReadOnly: boolean;
  currentObject: T;
  setter: React.Dispatch<React.SetStateAction<T>>;
}
