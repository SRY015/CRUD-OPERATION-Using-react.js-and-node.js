const mongoose = require('mongoose');


// Creating schema -->
const employeeSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is a required filed"]
    },
    age:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
        required: true
    },
    designation:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})


// Creating model for the above schema -->
const employees = new mongoose.model("employee",employeeSchema);

module.exports = employees;