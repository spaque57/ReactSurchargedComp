import { MessageBarType } from 'office-ui-fabric-react';

export interface IMessageBarComp {
  messageType: MessageBarType;
  message: string;
  showDismissButton: boolean;
  isDimissInternal: boolean; // true if the dismiss button is not manage by the parent component (a parent boolean is linked to the dismiss button)
  // if a boolean is linked to the dismiss button, these properties should be used
  currentObj: boolean;
  objSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IMessageBarCompProps {
  messageBarComp: IMessageBarComp;
}
