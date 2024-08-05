const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const {connectDB} = require("./src/db/connection")
const combinedRoutes = require("./src/routes/combinedRoutes.js")
const cookieParser = require('cookie-parser');

const app = express()
const PORT = 8000

app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    optionsSuccessStatus: 200
}))
dotenv.config({
    path: './.env'
})
connectDB(process.env.MONGODB_URI)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api', combinedRoutes);

app.listen(PORT, () => {
    console.log("App is listening on PORT: ",PORT);
})
