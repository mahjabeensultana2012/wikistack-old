const express = require("express");
const morgan = require("morgan");
const app = express();
const main = require("./views/main");

//morgan and static
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

//body parser
app.use(express.urlencoded({extend: false}));

app.use(express.json())

app.get("/", (req, res)=>{
    res.send (main());
})

const PORT = 3000;
app.listen(PORT,() =>{
    console.log(`App listening in port ${PORT}`)
})