const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRouter = require("./routes/task");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/task", taskRouter); 

mongoose.connect("mongodb+srv://mohamedmaghzaoui53:medSym@cluster0.nxzio5l.mongodb.net/")
    .then(() => {
        app.listen(3000, () => {
            console.log("server is running");
        });
    })
    .catch(err => {
        console.error("Failed to connect to MongoDB:", err);
    });
