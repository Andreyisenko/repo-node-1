import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
export const readContacts = async () => {
  const readFile = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(readFile);
};

// try {
//   console.log(await readContacts());
// } catch (error) {
//   console.log(error);
// }
