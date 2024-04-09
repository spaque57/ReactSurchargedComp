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


# InputLayout using Grid layout
This component is used to create aligned form instead of using many different type of input (like TextField, NumberInput, Dropdown, DatePicker...). Using the InputLayout component, you can specify what alignment you want for an input : no label, all in one line, small label with bigger input...Using this component, you an call every other component of the library with same properties and specify same layout to perfectly align all inputs.

Examples below :

1. Simple TextField

                <InputLayout
                  component={EInputType.TextField}
                  layoutType={EInputLayoutType.tierLine}
                  isReadOnly={customDisableButtonAccess()}
                  label={'Name'}
                  objValue={userObject.name}
                  currentObj={userObject}
                  objSetter={setUserObject}
                  objPropertyName='name'
                  isRequired={true}
                />

2. TrippelToggle

	    <InputLayout
		    	component={EInputType.TrippleToggle}
                layoutType={EInputLayoutType.veryVerySmallInputLine}
                isReadOnly={customDisableButtonAccess()}
                onTextToogle={Yes}
                offTextToogle={No}
		    	label={'User is admin ?'}
                objValue={userObject.admin}
                currentObj={userObject}
                objSetter={setUserObject}
                objPropertyName='admin'
                isRequired={true}
                isPrimaryColor={ETripleToogleColor.default}
             />

3. NumberInput

                <InputLayout
                  component={EInputType.NumberInput}
                  layoutType={EInputLayoutType.middleLine}
                  isReadOnly={true}
                  suffix={' ' + '€'}
                  min={0}
                  label={'API cost'}
                  objValue={api.cost}
                  currentObj={api}
                  objSetter={setApi}
                  objPropertyName='cost'
                />


In the settings of the InputLayout you can change the display of your component using only one property : layoutType. 
You have many possible layout from the smallest 'veryVerySmallInputLine' (input is very small like 1 word but label is big) to the biggest 'smallLabel'.
You can set an input without label or set input and label in one line using all the screen space.
Check the layout options and test what is the best for your form. Using same option for different component will align them all in the page.

You can also add your own component in the InputLayout : add your component in the 'inputComponentView.tsx' script and setup all the required properties for your input in the 'IInputLayoutProps.ts'. Add your component name in the 'EInputType' enum and that's all, you can now use your component in the InputLayout.


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

The NumberInput automatically add an 's' for suffix for number upper than 1, like : 1 file --> 2 files.
There is a JSON file with custom suffix. This file gives you the possibility of exclude some sufix for automatic plural concat or use custom plural type like 'x' instead of 's'.


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
