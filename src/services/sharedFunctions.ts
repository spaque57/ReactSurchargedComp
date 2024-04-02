import { DateTime } from 'luxon';

/* --- Shared string methods --- */
export function pluralize(word: string, count: number, plural?: string): string {
  if (count > 1 && plural !== undefined) return plural;
  else if (count > 1 && plural === undefined) return word + 's';
  else return word;
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function extractUserInfo(brutUser: string): string {
  const labels = brutUser.split(/\\+/);
  return labels[1];
}

export function tableLineCount(nbLine: number): string {
  if (nbLine < 2) return nbLine + ' ligne';
  else return nbLine + ' lignes';
}

/* --- Shared numeric methods --- */
export function round(value: number, precision: number): number {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

/* --- Shared Date/Time format --- */
// export function getDateFromAspNetFormat(date: string): number {
//   if (date == '') return 0;
//   else {
//     const re = /-?\d+/;
//     const m = re.exec(date);
//     return parseInt(m[0], 10);
//   }
// }

// Return date in string with right format
export function dateFormatToDisplay(date?: Date): string {
  if (date == null || date == undefined) return '';
  else return ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
}

// Return date and time in string with right format
export function dateAndTimeFormatToDisplay(date: Date): string {
  return (
    ('0' + date.getDate()).slice(-2) +
    '/' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '/' +
    date.getFullYear() +
    ' à ' +
    ('0' + date.getHours()).slice(-2) +
    ':' +
    ('0' + date.getMinutes()).slice(-2)
  );
}

export function datetimeToStringForFile(): string {
  let date: string = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
  date = date.replace(/\//g, '-');
  date = date.replace(/\s/g, '_');
  date = date.replace(/:/g, '-');
  return date;
}

// Create date time with date string
export function stringToDateTime(dateString: string, secToAdd: number): DateTime {
  const dateInSec = DateTime.fromFormat(dateString, 'DD/MM/YYYY').toSeconds();
  return DateTime.fromSeconds(dateInSec + secToAdd);
}

// export function stringToDate(dateString: string, lang: string): Date {
//   if (dateString !== '' && dateString !== null) {
//     const dateStringList: Array<string> = dateString.split('/');

//     if (lang == 'FR') return new Date(parseInt(dateStringList[2]), parseInt(dateStringList[1]) - 1, parseInt(dateStringList[0]));
//     else return new Date(parseInt(dateStringList[1]), parseInt(dateStringList[2]) - 1, parseInt(dateStringList[0]));
//   } else {
//     return null;
//   }
// }

export function msToTime(s: number) {
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;
  const hrs = (s - mins) / 60;

  return hrs + ' h ' + mins + ' min ' + secs + ' sec';
}

/* --- Shared custom string format --- */
export function checkEmailString(email: string): boolean {
  let isValid = true;
  if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    isValid = false;
  }

  return isValid;
}
