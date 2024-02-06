import http, { request } from 'http';

const server = http.createServer((request, response)=>{
    response.write("Helloworld");
    response.end();
});

server.listen(3000);