import * as React from 'react';
import styles from './notificationPopup.module.scss';
import { INotificationMessageProps } from './INotificationPopupProps';
import { Icon } from 'office-ui-fabric-react';

const NotificationMessage: React.FunctionComponent<INotificationMessageProps> = (props) => {
  let title = 'Notification';
  if (props.notificationPopup.title != null && props.notificationPopup.title != '') {
    title = props.notificationPopup.title;
  }

  return (
    <>
      <div className={styles.popupTitle}>
        <Icon iconName='Message' className={styles.popupIcon} /> {title}
      </div>
      <div className={styles.popupMessage}>{props.notificationPopup.message}</div>
    </>
  );
};

export default NotificationMessage;
