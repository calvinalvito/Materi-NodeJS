const express= require('express');
const request= require('supertest');


const app = express();

app.get('/', function(req, res){
    res.send('Hello World');
} )

app.listen(3000, ()=>{
    console.log("Server si running on port 3000")
})

//Unit Test
test('Hello World', async() => {
    //Request
    const app = express();
    app.get('/',(req,res)=>{
        res.send(`Hello ${req.query.name}`)
    })

    const response = await request(app).get('/').query({name:'World'});
    expect(response.text).toBe('Hello World');
});