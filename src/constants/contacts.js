import fs from 'node:fs/promises';
import path from 'node:path';
// console.log('sss');

// export const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');
export const PATH_DB = path.resolve('src', 'db', 'db.json');
const dataDb = await fs.readFile(PATH_DB, 'utf-8');
// console.log(dataDb);
