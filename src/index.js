const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const port = process.env.PORT
console.log(port)

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
const Routes = require('./routes/userFiles.router');
app.use('/', Routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
