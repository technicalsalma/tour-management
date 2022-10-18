const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const createDatabaseConnection = require('./utils/dbConnection');

const app = express();

const port = process.env.PORT || 5000;


/* Init Global Middle wares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Test Routes */
app.get('/', (req, res) => {
    res.send({success: true, message: "Route is working! YaY!"});
});

/* Database Connections */
createDatabaseConnection();

/* Listen to the PORT */
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

module.exports = app;