import util from 'util';

console.info(util.format("Nama : %s", "Eko"));

const person = {firstName: "Budi", lastName: "Santoso"};
//Menggunakan Util
console.info(util.format("Person : %j", person));
//Tidak Menggunakan Util
console.info(`Person : ${JSON.stringify(person)}`);