import * as React from 'react';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/index';
import { IOneLineDatePickerProps } from './IOneLineDatePickerProps';
import { updateInputDatePickers } from '../../services/inputService';
import { dateFormatToDisplay } from '../../services/sharedFunctions';

const OneLineDatePicker = <T,>(props: IOneLineDatePickerProps<T>) => {
  function datepickerTranslation(): IDatePickerStrings {
    const DayPickerStrings: IDatePickerStrings = {
      months: ['Janvier', 'Février', 'mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],

      shortMonths: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],

      days: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],

      shortDays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],

      goToToday: "Ajourd'hui",
      prevMonthAriaLabel: 'Mois précédent',
      nextMonthAriaLabel: 'Mois suivant',
      prevYearAriaLabel: 'Année précédente',
      nextYearAriaLabel: 'Année suivante',
      closeButtonAriaLabel: 'Fermer'
    };

    return DayPickerStrings;
  }

  function _onParseDateFromString(value: string): Date {
    const date = new Date();
    const values = (value || '').trim().split('/');
    const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
    const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
    let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
    if (year < 100) {
      year += date.getFullYear() - (date.getFullYear() % 100);
    }
    return new Date(year, month, day);
  }

  return (
    <DatePicker
      allowTextInput={true}
      firstDayOfWeek={DayOfWeek.Monday}
      showMonthPickerAsOverlay={true}
      showWeekNumbers={false}
      showGoToToday={false}
      strings={datepickerTranslation()}
      placeholder={'Séletionnez une date'}
      ariaLabel={'Séletionnez une date'}
      formatDate={dateFormatToDisplay}
      value={props.date}
      onSelectDate={(date: Date | null | undefined) => {
        if (date != null && date != undefined) updateInputDatePickers(props.currentObject, props.setter, date, props.propertyName);
      }}
      disabled={props.isReadOnly}
      parseDateFromString={_onParseDateFromString}
    />
  );
};

export default OneLineDatePicker;
