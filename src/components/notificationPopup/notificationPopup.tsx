import * as React from 'react';
import styles from './notificationPopup.module.scss';
import animations from './notificationAnimations.module.scss';
import { INotificationPopupProps } from './INotificationPopupProps';
import { CSSTransition } from 'react-transition-group';
import { MessageBarType } from 'office-ui-fabric-react';
import NotificationMessage from './notificationMessage';

const NotificationPopup: React.FunctionComponent<INotificationPopupProps> = (props) => {
  return (
    <>
      <CSSTransition unmountOnExit in={props.notificationPopupConfig.activator} timeout={1000} classNames={animations}>
        <>
          {props.notificationPopup.messageType === MessageBarType.success ? (
            <span
              className={`${styles.topcorner} ${styles.successNotification}`}
              onClick={() => {
                props.notificationPopupConfig.activatorSetter(false);
              }}>
              <NotificationMessage notificationPopup={props.notificationPopup} />
            </span>
          ) : (
            <></>
          )}
          {props.notificationPopup.messageType === MessageBarType.error ? (
            <span
              className={`${styles.topcorner} ${styles.dangerNotification}`}
              onClick={() => {
                props.notificationPopupConfig.activatorSetter(false);
              }}>
              <NotificationMessage notificationPopup={props.notificationPopup} />
            </span>
          ) : (
            <></>
          )}
          {props.notificationPopup.messageType === MessageBarType.warning ? (
            <span
              className={`${styles.topcorner} ${styles.warningNotification}`}
              onClick={() => {
                props.notificationPopupConfig.activatorSetter(false);
              }}>
              <NotificationMessage notificationPopup={props.notificationPopup} />
            </span>
          ) : (
            <></>
          )}
          {props.notificationPopup.messageType === MessageBarType.info ? (
            <span
              className={`${styles.topcorner} ${styles.infoNotification}`}
              onClick={() => {
                props.notificationPopupConfig.activatorSetter(false);
              }}>
              <NotificationMessage notificationPopup={props.notificationPopup} />
            </span>
          ) : (
            <></>
          )}
        </>
      </CSSTransition>
    </>
  );
};

export default NotificationPopup;
