import connectDB from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res){
    if(req.method==="POST"){
        connectDB();
        const {name, email, password}= req.body;
        if(!name || !email || !password){
            return res.status(400).json({msg:"All feilds are necessary"});
        }

        var emailexist= await User.findOne({email});
        if(emailexist){
            return res.status(400).json({msg:"User already registered"});
        }

        const hashedpass= await bcrypt.hash(password, 10);
        const newuser= new User({
            name,
            email,
            password: hashedpass,
        })
        const result= await newuser.save();
        const token= jwt.sign({token: result._id}, process.env.JWT_SECRET, {expiresIn: '30d'});
        return res.status(201).json({msg: "Registered successfully" , token: token, user: result});
    }
}