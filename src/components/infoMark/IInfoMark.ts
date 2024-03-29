export interface PropsInfoMark {
  label: string;
  iconName?: string;
  size?: string;
}

export enum EInfoMarkSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
  larger = 'larger'
}

export enum EInfoMarkIcon {
  Alert = 'AlertSolid',
  Forbidden = 'Blocked',
  Done = 'CompletedSolid',
  Info = 'InfoSolid',
  Question = 'UnknownSolid'
}
