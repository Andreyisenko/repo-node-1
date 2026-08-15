import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeLastContact = async () => {
  const read = await readContacts();
  read.pop();
  await writeContacts(read);
};

removeLastContact();
