# React Surcharged Components

I was working on many projects using the same React FluentUi components and decided to add them all in a homemade 'custom library'. 


# Config info
### Library config
- FluentUi React Fabric 6
- Requires 
	-  "react": "^17.0.2"
	-  "react-dom": "^17.0.2"
	-  "typescript": "3.9.7"
More info on package.json

### Component config
You may find some property shared with all components and there is why :
- currentObj : state object to use with the component
- objSetter / setter : state setter of the current object
- propertyName : name of the property in current object (for the setter)
- isReadOnly : set the input as read only
- value / defaultValue : the default value to display in the component


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


### NumberInput
This component display a input box for number with arrow to add or remove the amount. Component also check min or max value, and can add a prefix to the number.

        <NumberInput
          label='Rating component'
          isReadOnly={true}
          suffix={'%'}
          increment={1}
          defaultValue={props.objValue}
          currentObject={props.currentObj}
          setter={props.objSetter}
          propertyName={'rate'}
          min={0}
          max={100}
        />


### OneLineDatePicker
This component display a datepicker input box in one line. You can change datepicker language (currently in french).

        <OneLineDatePicker
          label='Star date'
          isReadOnly={false}
          date={new Date()}
          currentObject={props.currentObj}
          setter={props.objSetter}
          propertyName={'startDate'}
        />


### SearchedDropdown
This component display a dropdown with a search input inside the options of the dropdown.

1. Generate a list of options

	      // Generate fruit list
		  const fruitList: Array<IComboBoxOption> = [];
		  fruitList.forEach((fruit: IFuit) => {
		   fruitList.push({ key: idFruit, text: fruitLib });
		  });

2. Use component

	     <SearchableDropdown
          label='Fruits'
          isReadOnly={false}
          value={props.objValue}
          options={fruitList}
          currentObject={props.currentObj}
          setter={props.objSetter}
          propertieName={'favoredFruit'}
        />

### SelectChoice
This component display a custom dropdown.

1. Generate a list of options

	      // Generate fruit list
		  const fruitList: Array<IComboBoxOption> = [];
		  fruitList.forEach((fruit: IFuit) => {
		   fruitList.push({ key: idFruit, text: fruitLib });
		  });

2. Use component

        <SelectChoice
          label='Fruit List'
          isReadOnly={false}
          value={props.objValue}
          options={fruitList}
          currentObject={props.currentObj}
          setter={props.objSetter}
          propertieName={'Favored fruit'}
        />


### SelectChoice
This component display a custom dropdown.

1. Generate a list of options

	      // Generate fruit list
		  const fruitList: Array<IComboBoxOption> = [];
		  fruitList.forEach((fruit: IFuit) => {
		   fruitList.push({ key: idFruit, text: fruitLib });
		  });

2. Use component

        <SelectChoice
          label='Fruit List'
          isReadOnly={false}
          value={props.objValue}
          options={fruitList}
          currentObject={props.currentObj}
          setter={props.objSetter}
          propertieName={'Favored fruit'}
        />
   

### TrippleChoiceToggle
This component display toggle button with 2 choices, but user can unselect all choices (for a null value). Give the possibility of a true, or false, or nothing (null).
PrimaryColor will use default blue color for the input. If false, buttons will be green (for true) and red (for false).

        <TrippleChoiceToggle
          isReadOnly={false}
          defaultValue={props.objValue}
          currentObject={props.currentObj}
          setter={props.objSetter}
          propertyName={'hasRights'}
          isPrimaryColor={true}
        />

# Using
Feel free to use this library !
