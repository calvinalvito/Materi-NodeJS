import https from 'https';

const url = 'https://hookb.in/1gmqywqrLLfd6N0061k8';
const request = https.request(url,{
    method: "POST",
    headers:{
        "Content-Type": "application/json",
        "Accept":"application/json",
    }
}, function(response){
    response.addListener("data", function(data){
        console.info(`Receive : ${data.toString()}`)
    })
});

const body = JSON.stringify({
    firstName:'Budi',
    lastName:'Santoso'
});

request.write(body);
request.end();