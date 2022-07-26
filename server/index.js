const task = require('./routes/task');
const connection = require('./db');
const cors = require('cors');
const express = require('express');
const app = express();

connection();
app.use(express.json());
app.use(cors());

app.use('/api/tasks', task);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));