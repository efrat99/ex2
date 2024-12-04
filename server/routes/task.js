const express = require("express")
const router = express.Router()
const Task = require("../models/task")

router.post("/", async (req, res) => {
    const { name } = req.body
    const task = await Task.create({ name: name });
    res.json(task)
})
module.exports = router