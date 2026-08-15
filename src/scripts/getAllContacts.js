import { readContacts } from '../utils/readContacts.js';
export const getAllContacts = async () => {
  return await readContacts();
};

// console.log(22);
try {
  console.log(await getAllContacts());
} catch (error) {
  console.log(error);
}
