const mssql = require('mssql')
const config = require('../config/config')

async function getUsers (req,res){
    try{        
            const conn = await mssql.connect(config)
            const result = await conn.request().execute("getUsers"); 
    
            res.json(result.recordset);
    } catch (err){
        console.log(err);
    }
}

async function getUser (req,res){
    const id = req.params.id
    try{
            const conn = await mssql.connect(config)
            const result = await conn.request().execute("getUser");    
            return json(result);

    } catch (err){
        console.log(err);
    }
}
async function addUser (req,res){
    const{firstname, secondname, email, project, } = req.body
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input("firstname",firstname)
    .input("secondname", secondname)
    .input("email", email)
    .input("project", project)
    .execute("addUser");
        res.json("user added successfully")

    } catch (err){
        console.log(err);
    }
}
async function updateUser (req,res){
    const{firstname, secondname, email, project, } = req.body
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('employee_id', mssql.Int, id)
        .input("firstname", firstname)
    .input("secondname", secondname)
    .input("email", email)
    .input("project", project)
    .execute("updateUser");

        res.json("user added successfully")

    } catch (err){
        console.log(err);
    }
}
async function deleteUser (req,res){
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        let result1 = await pool.request()
        .input("employee_id", id)
   .execute("deleteUser");

        res.json("User deleted successfully")

    } catch (err){
        console.log(err);
    }
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}