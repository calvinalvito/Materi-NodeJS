import process from "process";
import readline from "readline"; // Correct import statement
// import { Readline } from "readline/promises"; // No need for this import

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Siapa Nama Anda? :", function (nama) {
    console.info(`Hello ${nama}`);
    input.close(); // Correct method to close the interface
});
