import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
const generateContacts = async (number) => {
  const file = [];
  const contactList = await readContacts();
  //   console.log(contactList);

  for (let index = 0; index < number; index++) {
    const cont = createFakeContact();
    file.push(cont);
  }
  writeContacts([...contactList, ...file]);
  return file;
};

generateContacts(2)
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error));
