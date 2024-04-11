const employees = require('../models/employeeSchema');

// Get employee data-->
const getEmployee= async(req,res)=>{
    try {
        const allEmployee = await employees.find();
        res.status(200).json(allEmployee);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// get employee by Id -->
const getEmployeeById=async(req, res)=>{
    try {
        const empId = req.params.id;
        const emp = await employees.findOne({_id : empId});
        res.status(200).json(emp);
    } catch (error) {
        res.json(error.message);
    }
}


// Insert employee data -->
const createEmployee= async(req,res)=>{

    const {name, age, email, phone, designation, address, description} = req.body;

    if(!name || !age || !email || !phone || !designation || !address || !description){
        res.status(404).json("Please fill all the fields carefully !!");
    }

   try {
    const preuser = await employees.find({email : email});
    if(preuser.length > 0){
        res.status(404).json({
            message : "This user is already exists !!",
            preuser
        });
    }else{
        const newEmployee = new employees({
            name, age, email, phone, designation, address, description
        });
        await newEmployee.save();
        res.status(201).json(newEmployee);
    }
   } catch (error) {
    res.status(500).json(error.message);
   }
}

// Update employee by id -->
const updateEmployee=async(req, res)=>{
    try {
        const empId = req.params.id;
        const emp = await employees.findOne({_id:empId});
        const {name, age, email, phone, designation, address, description} = req.body;
        emp.name = name;
        emp.age = age;
        emp.email = email;
        emp.phone = phone;
        emp.designation = designation;
        emp.address = address;
        emp.description = description;
        await emp.save();
        res.status(200).json({
            success : true,
            message : "Employee is updated successfully !!",
            emp : { name, age, email, phone, designation, address, description}
        })
    } catch (error) {
        res.status(500).json(error.message);
    }
}


// Delete employee by id -->
const removeEmployee=async(req,res)=>{
    try{
        const userId = req.params.id;
        await employees.deleteOne({_id:userId});
        res.status(200).json({
            success : true,
            message : "Employee is deleted successfully"
        });
    }catch(error){
        res.status(500).json(error.message);
    }
}

module.exports = {getEmployee, createEmployee, getEmployeeById, removeEmployee, updateEmployee};