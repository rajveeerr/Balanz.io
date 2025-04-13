let jwt=require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET= process.env.JWT_SECRET;
const fs=require("fs");
const path=require("path");
const userModel=require("../database/db.js")

todoJson=path.join(__dirname,"../database/todos.json");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    reqToken=req.headers.authorization;
    if(reqToken){
        try{
            let username=jwt.verify(reqToken,JWT_SECRET).username;
            let userFound=await userModel.findOne({username:username})
            if(userFound){
                req.username=username;
                req.userData=userFound;
                next();
            }
            else{
                res.status(404).json({
                    message: "User Not Found"
                })
            }
        }
        catch(err){
            res.status(401).json({
                message: "Invalid Token given!!!!!! Make sure to use a valid token next time. Err Status: "+err
            })
        }
    }
    else{
        res.status(302).send({
            message: 'You Cant Acess this resourse without logging in!!!!!!'
        });
        // res.redirect('/login');
    }
}

module.exports = userMiddleware;