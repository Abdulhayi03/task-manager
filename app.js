
const express = require('express');
const app = express();
const dotenv = require('dotenv')
const {connectDB} = require('./db.js/connection')
const taskRoute = require('./routes/tasks')

dotenv.config();


//middlewares
app.use(express.static('./public'))
app.use(express.json())

//route middlewares
app.use('/tasks', taskRoute)

//database connection
const start = async() => {
try {
    await connectDB(process.env.CONNECTION);
} catch (error) {
    console.log(error)
}
}

const port = 7070

app.listen(port, ()=>{
    console.log(`Server is running on PORT ${port}`);
})

start();