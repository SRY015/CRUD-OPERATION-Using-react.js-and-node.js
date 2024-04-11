require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const employeeRouter = require('./routes/router');
const employees = require('./models/employeeSchema');

require('./config/db');

const config = require('./config/config');

const PORT = config.app.port;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(employeeRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});
