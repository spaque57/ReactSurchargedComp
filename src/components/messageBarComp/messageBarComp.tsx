import * as React from 'react';
import { MessageBar } from 'office-ui-fabric-react';
import { IMessageBarCompProps } from './IMessageBarCompProps';
import styles from './messageBarComp.module.scss';

const MessageBarComp: React.FunctionComponent<IMessageBarCompProps> = (props) => {
  const [showMessageBar, setShowMessageBar] = React.useState(true);

  return (
    <>
      {showMessageBar ? (
        <>
          {props.messageBarComp.showDismissButton ? (
            <MessageBar
              messageBarType={props.messageBarComp.messageType}
              isMultiline={false}
              onDismiss={() => {
                if (!props.messageBarComp.isDimissInternal) {
                  props.messageBarComp.objSetter(false);
                }
                setShowMessageBar(false);
              }}
              dismissButtonAriaLabel='Close'>
              {props.messageBarComp.message}
            </MessageBar>
          ) : (
            <MessageBar className={styles.smallBar} messageBarType={props.messageBarComp.messageType} isMultiline={false}>
              {props.messageBarComp.message}
            </MessageBar>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default MessageBarComp;
