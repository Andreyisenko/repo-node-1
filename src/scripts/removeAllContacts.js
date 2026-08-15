// import { readContacts } from "../utils/readContacts";
import { writeContacts } from '../utils/writeContacts.js';
export const removeAllContacts = async () => {
  writeContacts([]);
};

removeAllContacts();
