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

export interface ICustomSuffixlist {
  suffix: Array<ICustomSuffix>;
}

export interface ICustomSuffix {
  label: string;
  suffix: string;
  pluralType: string;
}

export enum ESuffixType {
  S = 's',
  X = 'x',
  None = ''
}

export enum ENumberInputSuffix {
  Euro = 'Euro',
  Percent = 'Percent',
  Month = 'Month',
  M2 = 'M2',
  Level = 'Level',
  KM = 'KM'
}
