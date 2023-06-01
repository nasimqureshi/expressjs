const express = require("express");
const path = require("path")
const bodyParser = require("body-parser")

const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res) =>{
   res.sendFile(path.join(__dirname + "/index.html"));
})
app.post("/api/v1/Login", (req, res) =>{
    res.send(`<h1>Your name is ${req.body.name}</h1>
    <h2>Your Email is ${req.body.email}</h2> <h3>Your password is ${req.body.password}</h3>`)
    console.log(req.body)
})


app.listen(port, () =>{
    console.log('Server is  ready');
});