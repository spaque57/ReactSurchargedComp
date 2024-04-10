import { IComboBox, IComboBoxOption, IDropdownOption } from 'office-ui-fabric-react';
import { FormEvent } from 'react';

/* --- Update Input Methods --- */
export function updateInputData<T>(evt: React.ChangeEvent<HTMLInputElement>, currentObject: T, setter: React.Dispatch<React.SetStateAction<T>>, dataType: string): void {
  if (dataType === 'string') {
    setter({ ...currentObject, [evt.currentTarget.name]: evt.currentTarget.value });
  } else if (dataType === 'date') {
    let convertValue = evt.currentTarget.value.replace(/\s/g, '');
    convertValue = convertValue.replace(/_/g, '');
    if (convertValue.match(/^\d\d\/\d\d\/\d\d\d\d$/)) {
      const date: Date = new Date(convertValue.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));
      setter({ ...currentObject, [evt.currentTarget.name]: date });
    }
  } else if (dataType === 'number') {
    let value = 0;
    if (evt.currentTarget.value === '' || evt.currentTarget.value === null) {
      value = 0;
    } else {
      value = parseInt(evt.currentTarget.value);
    }

    setter({ ...currentObject, [evt.currentTarget.name]: value });
  }
}

export function updateInputDatePickers<T>(currentObject: T, setter: React.Dispatch<React.SetStateAction<T>>, date: Date, propertyName: string): void {
  setter({ ...currentObject, [propertyName]: date });
}

export function updateBoolInputData<T>(
  ev: React.MouseEvent<HTMLElement, MouseEvent>,
  value: boolean,
  currentObject: T,
  setter: React.Dispatch<React.SetStateAction<T>>,
  name: string
): void {
  setter({ ...currentObject, [name]: value });
}

export function updateNumberInputData<T>(value: number, currentObject: T, setter: React.Dispatch<React.SetStateAction<T>>, name: string): void {
  setter({ ...currentObject, [name]: value });
}

export function updateComboboxInputData<T>(
  ev: FormEvent<IComboBox>,
  value: IComboBoxOption,
  currentObject: T,
  setter: React.Dispatch<React.SetStateAction<T>>,
  name: string
): void {
  setter({ ...currentObject, [name]: value.key });
}

export function updateDropdownInputData<T>(
  ev: React.FormEvent<HTMLDivElement>,
  value: IDropdownOption,
  currentObject: T,
  setter: React.Dispatch<React.SetStateAction<T>>,
  name: string
): void {
  setter({ ...currentObject, [name]: value.key });
}
