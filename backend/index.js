const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//config env variables
require('dotenv').config()
//get database url from env varaiable for security
const databaseUrl=process.env.DATABASE_URL
//api uri
const taskRouter = require("./routes/task");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/tasks", taskRouter); 
//get port using env variable for hosting site on render
const Port=process.env.PORT
//connect to mongo db database  and run server
mongoose.connect(databaseUrl)
    .then(() => {
        app.listen(Port|| 3001, () => {
            console.log("server is running");
        });
    })
    .catch(err => {
        console.error("Failed to connect to MongoDB:", err);
    });
