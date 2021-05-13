import Moment from 'moment';

export function formatDateTimeString(dateTimeString: string, format: string) {
  const momentObject = Moment(dateTimeString);
  return momentObject.format(format);
}
