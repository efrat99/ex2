require("dotenv").config()

const express = require("express")

const cors = require("cors")
const corsOptions = require("./corsOptions")
const connectDB = require("./config/dbConn")
const { default: mongoose } = require("mongoose")
const PORT = process.env.PORT || 6555
const app = express()
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.use("/api/tasks", require("./routes/task"))
app.use("/api/article", require("./routes/article"))


app.get("/", (req, res)=>{
    res.send("Home Page")
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
})
mongoose.connection.on('error', err => {
    console.log(err)
})

