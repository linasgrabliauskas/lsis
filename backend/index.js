require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes')

const app = express();
const PORT = process.env.PORT || 5000;

// Cors options
const corsOptions = { exposedHeaders: ['token'] }

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', routes)

// Database
const DB_URI = *****
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((res) => {
    console.log(`Server is running on port: ${PORT}`)
    app.listen(PORT)
  })



