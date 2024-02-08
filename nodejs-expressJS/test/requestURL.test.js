const express= require('express');
const request= require('supertest');


const app = express();

app.get('/', function(req, res){
    res.send('Hello World');
} )

app.listen(4000, ()=>{
    console.log("Server si running on port 4000")
})

//Unit Test
test('Request', async() => {
    //Request
    const app = express();
    app.get('/hello/world',(req,res)=>{
        res.json({
            path:req.path,
            originalUrl:req.originalUrl,
            hostname:req.hostname,
            protocol:req.protocol
        })
    });

    const response = await request(app)
    .get('/hello/world')
    .query({name:'World'});

    expect(response.body).toEqual({
        path:'/hello/world',
        originalUrl:'/hello/world?name=World',
        hostname:'127.0.0.1',
        protocol:'http',
    });
});