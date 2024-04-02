export interface INumberInputProps<T> {
  defaultValue: number;
  suffix: string;
  increment: number;
  label: string;
  isReadOnly: boolean;
  currentObject: T;
  setter: React.Dispatch<React.SetStateAction<T>>;
  propertyName: string;
  min?: number;
  max?: number;
}
