const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=>{
        res.send("Hello");
    });


//post method
app.post('/',async (req,res)=>{
    const name = await req.body.name;
    const psw = await req.body.psw;

    console.log(`Your name is ${name}`);
    console.log(`Your psw is ${psw}`);

})

app.put('/',async(req,res)=>{
    res.send("hello");
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});