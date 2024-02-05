function samplePromise(name){
    debugger;
    return `Halo Nama Saya ${name}` ;
}

    const name = await samplePromise("Budi");
    console.info(name);
