import { createFakeContact } from '../utils/createFakeContact.js';
const generateContacts = async (number) => {
  const file = [];
  for (let index = 0; index < number; index++) {
    const cont = await createFakeContact();
    file.push(cont);
  }
  return file;
};

generateContacts(3)
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error));
