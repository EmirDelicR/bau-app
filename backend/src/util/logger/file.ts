import fs from 'fs';
import path from 'path';

import Console from 'src/util/logger/console';

export const requestStream = fs.createWriteStream(
  path.join(__dirname, '..', '..', 'logs', 'request.log'),
  {
    flags: 'a',
  }
);

const errorStream = fs.createWriteStream(
  path.join(__dirname, '..', '..', 'logs', 'error.log'),
  {
    flags: 'a',
  }
);

export const writeErrorToFile = (text: string) => {
  const currentDate = new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '');
  const dataToWrite = `#Error: <${currentDate}> ${text}`;

  errorStream.on('error', (e) => {
    Console.error(e.message);
  });
  errorStream.write(`${dataToWrite}\n`);
};
