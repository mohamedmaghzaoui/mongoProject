const express = require("express");

const taskRouter = express.Router();
const Task = require("../models/task");


// Create a task
taskRouter.post("/", async (req, res) => {
    const { title, date, description, username,parentTask } = req.body; 
    try {
        const task = new Task({ title, date, description, username,parentTask });
        await task.save();
        res.send("Task saved successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving task");
    }
});

// Read all tasks
taskRouter.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching tasks");
    }
});

// Read a single task by ID
taskRouter.get("/:id", async (req, res) => {
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
taskRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updateFields = req.body; 
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

taskRouter.delete("/:id", async (req, res) => {
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
// Read tasks by username
taskRouter.get("/username/:username", async (req, res) => {
    const { username } = req.params;
    try {
        const tasks = await Task.find({ username: username });
        res.json(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching tasks by username");
    }
});


module.exports = taskRouter;
