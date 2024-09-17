const express = require('express'),
   router = express.Router();
   
const service = require('../service/employee.service');

router.get('/',async (req,res) => {
    const employees = await service.getAllEmployees()
    res.send(employees)
})

router.get('/:id',async (req,res) => {
    const employee = await service.getEmployeeById(req.params.id)
    if (employee.length == 0 )
        res.status(404).json('No record with given id: '+req.params.id)
    else
        res.send(employee)
})

router.delete('/:id',async (req,res) => {
    const affectedRows = await service.deleteEmployee(req.params.id);
    
    if (affectedRows == 0 )
        res.status(404).json('No record with given id: '+req.params.id)
    else
        res.send('Deleted successfully')
})

router.post('/',async (req,res) => {
    await service.addOrEditEmployee(req.body);
    res.status(201).send('Created successfully.')
})

router.put('/:id',async (req,res) => {
    const affectedRows = await service.addOrEditEmployee(req.body, req.params.id)
    if (affectedRows == 0 )
        res.status(404).json('No record with given id: '+req.params.id)
    else
        res.send('Updated successfully')
})

module.exports = router;
