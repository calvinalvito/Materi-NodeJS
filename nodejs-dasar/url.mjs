import { URL } from "url";

const url = new URL("https://ww.programmerzamannow.com/belajar?kelas=nodejs");

url.host="www.budi.com";


console.info(url.toString);
console.info(url.protocol);
console.info(url.host);
console.info(url.pathname);
console.info(url.searchParams);
console.info(url.password);