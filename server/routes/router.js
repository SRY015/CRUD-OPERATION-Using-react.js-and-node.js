const express = require('express');
const {getEmployee, createEmployee, getEmployeeById, removeEmployee, updateEmployee} = require('../controller/employee.controller');
const router = express.Router();

router.get('/getData', getEmployee);

router.get('/getData/:id', getEmployeeById);

router.post('/register', createEmployee);

router.put('/updateData/:id', updateEmployee);

router.delete('/removeData/:id', removeEmployee);

module.exports = router;