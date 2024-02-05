function samplePromise(){
    return Promise.resolve("Budi");
}

    const name = await samplePromise();
    console.info(name);
