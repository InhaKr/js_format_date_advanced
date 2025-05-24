'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  let qwer;
  let d;
  const v = fromFormat[fromFormat.length - 1];

  const r = date.split(v);

  for (let i = 0; i < r.length; i++) {
    for (let k = 0; k < toFormat.length - 1; k++) {
      d = toFormat[toFormat.length - 1];

      if (toFormat[k] === fromFormat[i]) {
        toFormat[k] = r[i];
      }

      if (toFormat[k] < fromFormat[i]) {
        for (const char of toFormat[k]) {
          for (const xar of fromFormat[i]) {
            if (xar === char) {
              const raw = r[i].split('').splice(2, 2).join('');

              toFormat[k] = raw;
            }
          }
        }
      }

      if (toFormat[k].length > fromFormat[i].length) {
        for (const rad of toFormat[k]) {
          for (const dar of fromFormat[i]) {
            if (dar === rad) {
              qwer = r[i];
            }

            if (qwer < 30) {
              toFormat[k] = '20' + qwer;
            }

            if (qwer >= 30) {
              toFormat[k] = '19' + qwer;
            }
          }
        }
      }
    }
  }

  toFormat.length = 3;

  return toFormat.join(d);
}

module.exports = formatDate;
