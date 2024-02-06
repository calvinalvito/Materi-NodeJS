import zlib from "zlib";
import fs from 'fs';

const source = fs.readFileSync("zlib-compres.mjs");
const result = zlib.gzipSync(source);

fs.writeFileSync("zlib-compres.mjs.txt", result);

