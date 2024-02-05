function samplePromise(){
    return Promise.resolve("Budi");
}

async function name(){
    const name = await samplePromise();
    console.info(name);
}

name()

