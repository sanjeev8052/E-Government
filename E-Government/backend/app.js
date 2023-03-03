const express = require('express');
const ConnectDB = require('./config/database');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express();
app.use(cors())
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
require('dotenv').config({ path: 'config/config.env' })
ConnectDB();

app.use("/api/", require('./Routes/userRoutes'))

module.exports = app