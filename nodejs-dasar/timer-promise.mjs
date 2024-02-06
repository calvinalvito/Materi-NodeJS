import timers from 'timers/promises'

//console.info(new Date());
//await timers.setTimeout(5000);

//console.info(new Date());

for await (const startTime of timers.setInterval(1000,'')){
    console.info(`Start time at ${new Date()}`)
}