import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
  const countCont = await readContacts();
  return countCont.length;
};

console.log(`кількість контактів: ${await countContacts()}`);
