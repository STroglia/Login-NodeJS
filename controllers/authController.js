const jwt = require('jsonwebtoken')
const bcyptjs = require('bcryptjs')
const conexion = requiere('../database/db')
const {promisify} = require('util')

//procedimiento para registrarse
exports.register = async (req, res)=>{
    const name = req.body.name
    const user = req.body.user
    const pass = req.body.pass
    console.log(name + " - " + user + " - " + pass)

}