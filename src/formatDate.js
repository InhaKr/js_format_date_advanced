'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const oldSeparate = fromFormat.splice(3, 1);
  const newSeparate = toFormat.splice(3, 1);
  const dataToday = date.split(oldSeparate);
  let year;
  let mans;
  let day;

  for (let i = 0; i < dataToday.length; i++) {
    if (fromFormat[i].includes('Y')) {
      year = dataToday[i];
    } else if (fromFormat[i].includes('M')) {
      mans = dataToday[i];
    } else if (fromFormat[i].includes('D')) {
      day = dataToday[i];
    }
  }

  for (let z = 0; z < toFormat.length; z++) {
    if (toFormat[z].includes('Y') && toFormat[z].length === year.length) {
      toFormat[z] = year;
    } else if (toFormat[z].includes('Y') && toFormat[z].length < year.length) {
      toFormat[z] = year.slice(-2);
    } else if (
      toFormat[z].includes('Y') &&
      toFormat[z].length > year.length &&
      year < 30
    ) {
      toFormat[z] = '20' + year;
    } else if (
      toFormat[z].includes('Y') &&
      toFormat[z].length > year.length &&
      year >= 30
    ) {
      toFormat[z] = '19' + year;
    } else if (toFormat[z].includes('M')) {
      toFormat[z] = mans;
    } else if (toFormat[z].includes('D')) {
      toFormat[z] = day;
    }
  }

  return toFormat.join(newSeparate);
}

module.exports = formatDate;
