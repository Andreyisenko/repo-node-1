import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
// import fs from 'fs/promises';
// import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  const readFile = await readContacts();
  writeContacts([...readFile, createFakeContact()]);
};

addOneContact();
