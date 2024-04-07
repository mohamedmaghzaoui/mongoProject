const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()
const databaseUrl=process.env.DATABASE_URL
const taskRouter = require("./routes/task");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/tasks", taskRouter); 
const Port=process.env.PORT
mongoose.connect(databaseUrl)
    .then(() => {
        app.listen(Port|| 3001, () => {
            console.log("server is running");
        });
    })
    .catch(err => {
        console.error("Failed to connect to MongoDB:", err);
    });
