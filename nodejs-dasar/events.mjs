import { EventEmitter } from "events";

const emitter = new EventEmitter();
emitter.addListener("Hello",(name)=>{
    console.info(`Hello ${name}`)
})

emitter.addListener("Hello",(name)=>{
    console.info(`Hello ${name}`)
})

emitter.emit("Hello", "Budi")

