const express = require("express");
const morgan = require("morgan");
const app = express();
const main = require("./views/main");
const models = require('./models');

//morgan and static
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

//body parser
app.use(express.urlencoded({extend: false}));

app.use(express.json())

app.get("/", (req, res)=>{
    res.send (main());
})

const init = async () =>{
    await models.User.sync()
    await models.Page.sync()

const PORT = 3000;
app.listen(PORT,() =>{
    console.log(`App listening in port ${PORT}`)
})
}
  
init()

// const PORT = 3000;
// app.listen(PORT,() =>{
//     console.log(`App listening in port ${PORT}`)
// })