/* eslint-disable @typescript-eslint/no-explicit-any */

// LOGGER
const Logger = {
  info: (idString: string, data: any) => {
    console.log(idString, data);
  },
  warn: (idString: string, data: any) => {
    console.warn(idString, data);
  },
  error: (idString: string, data: any) => {
    console.error(idString, data);
  },
};

export default Logger;
