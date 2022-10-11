const dotenv = require('dotenv')

const app = require('./app.js');




dotenv.config({path:'./config.env'})

console.log(process.env)

const port = 3000;
app.listen(port, ()=>{
    console.log("app running on part 3000")
});


