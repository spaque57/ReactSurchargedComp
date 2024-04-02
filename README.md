# React Surcharged Components

I was working on many projects using the same React FluentUi components and decided to add them all in a homemade custom library. 


# Config info
Components works with :
- FluentUi React Fabric 6
- Requires 
	-  "react": "^17.0.2"
	-  "react-dom": "^17.0.2"
	-  "typescript": "3.9.7"
More info on package.json


# Components
### MessageBarComp
This component display a message in a box with icons in function of the type of message that you wants to show : warning, error, info and success.

      const messageBarComp: sharedModels.IMessageBarComp = {
        message: 'Hello There',
        messageType: MessageBarType.warning,
        showDismissButton: true,
        isDimissInternal: false,
        currentObj: null,
        objSetter: null
      };
    
    <div>
	    <MessageBarComp messageBarComp={renderEditMessage} />
    </div>


### InfoMark
This component display an info icon with tooltip to show a message. You can use different icon and setup a specific message.

     <InfoMark label={'New info'} iconName={EInfoMarkIcon.Question} size={EInfoMarkSize.larger} />


### Notification Popup
This component display a notification in the top right corner of the screen. The notification has a title and a message. In case of success, this notification will automatically disappear in 5 secondes. In case of error it will disappear when user click on it.

1. Create notification properties 

	    // --- Notification / MessageBar
		export function emptyNotificationMessage(): sharedModels.INotificationMessage {
		  const notificationMessage: sharedModels.INotificationMessage = {
		    title: '',
		    message: '',
		    messageType: 0
		  };

		  return notificationMessage;
		}
		export function emptyNotificationPopupConfig(): sharedModels.INotificationPopupConfig {
		  const notificationPopupConfig: sharedModels.INotificationPopupConfig = {
		    activator: false,
		    activatorSetter: null
		  };

		  return notificationPopupConfig;
		}



		let notificationMessage: sharedModels.INotificationMessage = emptyNotificationMessage();
		let notificationConfig: sharedModels.INotificationPopupConfig = emptyNotificationPopupConfig();

2. Preload notification config

		export function createNotificationPopupConfig(activator: boolean, activatorSetter: React.Dispatch<React.SetStateAction<boolean>>): sharedModels.INotificationPopupConfig {
		  const notificationPopupConfig: sharedModels.INotificationPopupConfig = {
		    activator: activator,
		    activatorSetter: activatorSetter
		  };

		  return notificationPopupConfig;
		}	    
		
		notificationConfig = createNotificationPopupConfig(noficitationTransition, setNoficitationTransition);

3. Setup notification message and type

	     notificationMessage = createNotificationMessage(t('SUCCESS_0'), t('RECORD_2'), MessageBarType.success);
		showNewNotification(notificationMessage, notificationConfig);

4. Display notification popup in front

        <div>
		    <NotificationPopup notificationPopup={notificationMessage} notificationPopupConfig={notificationConfig} />
	    </div>



# Using
Feel free to use this library !
