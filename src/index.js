const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const dotenv = require('dotenv');
const connectToDb =require('./config/Connection') 
require('dotenv').config();
const { initializeGridFsConnection } = require('./middlewares/userFiles.middleware');
const app = express();
const port = process.env.PORT || 3000;
// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectToDb().then((connection) => {
  try {
    // Initialize GridFS connection
   
    initializeGridFsConnection(connection);
  } catch (error) {
    console.error('Error initializing GridFS connection', error);
  }});

// Define your routes here
const Routes = require('./routes/userFiles.router');
app.use('/', Routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
