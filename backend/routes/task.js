const express = require("express");
const mongoose = require("mongoose");
const taskRouter = express.Router();
const Task = require("../models/task");

mongoose.connect("mongodb+srv://mohamedmaghzaoui53:medSym@cluster0.nxzio5l.mongodb.net/");

// Create a task
taskRouter.post("/addTask", async (req, res) => {
    const { title, date, category, username } = req.body; // Assuming you pass these fields in the request body
    try {
        const task = new Task({ title, date, category, username });
        await task.save();
        res.send("Task saved successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving task");
    }
});

// Read all tasks
taskRouter.get("/readAll", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching tasks");
    }
});

// Read a single task by ID
taskRouter.get("/read/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).send("Task not found");
        }
        res.json(task);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching task");
    }
});

// Update a task by ID
taskRouter.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    const updateFields = req.body; // Assuming you pass fields to update in the request body
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, updateFields, { new: true });
        if (!updatedTask) {
            return res.status(404).send("Task not found");
        }
        res.json(updatedTask);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating task");
    }
});

// Delete a task by ID

taskRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).send("Task not found");
        }
        res.send("Task deleted successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting task");
    }
});

module.exports = taskRouter;
