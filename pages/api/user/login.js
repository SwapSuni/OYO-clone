import connectDB from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res){
    if(req.method==="POST"){
        connectDB();
        const {email, password}= req.body;

        if(!email || !password){
            return res.status(400).json({msg: "Email ans Password are required"})
        }

        const emailexist= await User.findOne({email});
        if(!emailexist){
            return res.status(400).json({msg: "Please register first"});
        }

        const passwordMatch= await bcrypt.compare(password, emailexist.password);
        if(!passwordMatch){
            return res.status(400).json({msg: "Invalid Credentials !"})
        }

        const token= jwt.sign({token: emailexist._id}, process.env.JWT_SECRET, {expiresIn: '30d'});
        return res.status(200).json({msg: "Logged in successfully !", token, user: emailexist});
    }
}