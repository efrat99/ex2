const express = require("express")
const router = express.Router()
const Article = require("../models/article")

router.post("/", async (req, res) => {
    const item = req.body
    const article = await Article.create({ body: item.body, title:item.title, active:item.active });
    res.json(article)
})
module.exports = router