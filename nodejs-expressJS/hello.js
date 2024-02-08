const express= require('express');
const request= require('supertest');


const app = express();

app.get('/', function(req, res){
    res.send('Hello World');
} )

const response = await request(app)
.get('/')
.query({firstName:"Budi", lastName: "Santoso"});
app.listen(3000, ()=>{
    console.log("Server si running on port 3000")
})