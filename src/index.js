const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const config = require('./config/config');

const connectToDb =require('./config/Connection') 
require('dotenv').config();
const app = express();
// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectToDb();
// Define your routes here
const Routes = require('./routes/userData.router');
app.use('/', Routes);

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
