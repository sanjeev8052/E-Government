const express = require('express');
const ConnectDB = require('./config/database');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require("express-fileupload")

const app = express();
app.use(cors())
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload({
    useTempFiles:true
}))

require('dotenv').config({ path: 'config/config.env' })
ConnectDB();
// Admin
app.use("/api/admin", require("./Routes/Admin/Adminlog"))
app.use("/api/admin", require("./Routes/Admin/Employee"))
app.use("/api/admin", require("./Routes/Admin/User"))
app.use("/api/admin", require("./Routes/Admin/complaint"))
app.use("/api/admin", require("./Routes/Admin/Categories"))


// Employee
app.use("/api/employee", require("./Routes/Emp/Emplogin"))

// User
app.use("/api/", require('./Routes/User/userRoutes'))
app.use('/api', require('./Routes/User/complaint'))
app.use('/api', require('./Routes/User/feedback'))

module.exports = app