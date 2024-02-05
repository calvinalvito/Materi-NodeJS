import process from "process";

process.addListener("exit", (exitCode)=>{
    console.info(`Node JS exit with code ${exitCode}`)
});

console.info(process.version);
console.info(process.argv);
console.info(process.report)

process.exit(1)
