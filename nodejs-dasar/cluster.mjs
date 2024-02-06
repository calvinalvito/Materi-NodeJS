import cluster from "cluster";
import http from 'http';
import os from 'os';
import process from "process";

if(cluster.isPrimary){
    for(let i=0; i< os.cpus().length; i++){
        cluster.fork();
    }
    cluster.addListener("exit", function(worker){
        console.info(`Worker ${worker.id} is exited`);
    })
}
if(cluster.isWorker){
    const server = http.createServer((request, response)=>{
        response.write(`Response from process ${process.pid}`);
        response.end();
        response.exit();
    })
    server.listen(3000);
    console.info(`Worker: ${process.pid}`);

}