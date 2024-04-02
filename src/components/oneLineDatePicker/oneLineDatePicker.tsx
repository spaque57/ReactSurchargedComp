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

  return (
    <DatePicker
      firstDayOfWeek={DayOfWeek.Monday}
      showMonthPickerAsOverlay={true}
      showWeekNumbers={true}
      strings={datepickerTranslation()}
      placeholder={'Séletionnez une date'}
      ariaLabel={'Séletionnez une date'}
      formatDate={dateFormatToDisplay}
      value={props.date}
      onSelectDate={(date: Date | null | undefined) => {
        if (date != null && date != undefined) updateInputDatePickers(props.currentObject, props.setter, date, props.propertyName);
      }}
    />
  );
};

export default OneLineDatePicker;
