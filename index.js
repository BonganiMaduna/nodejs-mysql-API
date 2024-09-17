const express = require('express'),
 app = express(),
 bodyparser= require('body-parser');
 require('express-async-errors')
 
 const db = require('./db'),
       employeeRoutes = require('./controllers/employee.controller'),
       userRoutes = require('./controllers/user.controller');


app.use(bodyparser.json())
app.use('/api/employees',employeeRoutes)
app.use('/api/users',userRoutes)

app.use((err,req,res,next)=>{
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
})

db.query("SELECT 1")
 .then(() => {
    //make sure the database is connected
    console.log('DB connection successful')
    //then start the server
    app.listen(3000,
        ()=> console.log('Server started on port 3000')
     )
 })
.catch(err=>console.log('db connection failed. \n'+err))

