export interface ITrippleChoiceToggleInputProps<T> {
  defaultValue: any;
  isReadOnly: boolean;
  currentObject: T;
  setter: React.Dispatch<React.SetStateAction<T>>;
  propertyName: string;
}
