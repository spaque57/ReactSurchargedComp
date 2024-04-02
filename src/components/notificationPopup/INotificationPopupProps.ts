import { MessageBarType } from 'office-ui-fabric-react';

export interface INotificationMessage {
  messageType: MessageBarType;
  message: string;
  title: string;
}

export interface INotificationPopupConfig {
  activator: boolean;
  activatorSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface INotificationPopupProps {
  notificationPopup: INotificationMessage;
  notificationPopupConfig: INotificationPopupConfig;
}

export interface INotificationMessageProps {
  notificationPopup: INotificationMessage;
}
