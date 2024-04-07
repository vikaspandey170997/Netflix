import { User } from "../models/usermodel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import router from "../routes/userRoute.js";

export const Login = async (req,res) => {
  try {
    const {email, password} = req.body;
    let data=req.body;
    console.log(data);
    if(!email || !password){
      return res.status(401).json({
        message:"Invalid data",
        success:false
      })
    };
    const user = await User.findOne({email});
    if(!user){
      return res.status(401).json({
        message:"Invalid email or password",
        success:false
      });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if(!isMatch){
      return res.status(401).json({
        message:"Invalid email or password",
        success:false
      });
    }
    const tokeData = {
      id:user._id
    }
    const token = await jwt.sign(tokeData, "ugdgdgddddddfgfgfg", {expiresIn:"1h"});

    return res.status(200).cookie("token", token, {httpOnly:true}).json({
      message:`Welcome back ${user.fullName}`,
      user,
      success:true
    });

    } catch(error) {
      console.log(error);
  }
}
export const Logout = async (req,res) => {
  return res.status(200).cookie("token","", {expiresIn: new Date(Date.now()), httpOnly:true}).json({
    message:"User logged out successfully.",
    success:true,
  });
}

export const Register = async (req,res) => {
  try {
    const {fullName, email, password} = req.body;
    if(!fullName || !email || !password){
      return res.status(401).json({
        message:"invalid data",
        success:false
      });
    }

    const user = await User.findOne({email});
    if(user){
      return res.status(401).json({
        message:"This email is already in use",
        success:false,
      })
    }

    const hashedPassword = await bcryptjs.hash(password,16);

    await User.create({
      fullName,
      email,
      password:hashedPassword
    });

    return res.status(201).json({
      message:"Account created successfully.",
      success : true
    })

  }catch(error){
    console.log(error);
  }
}

// app.use("api/v1/user", router);
 
// app.listen(process.env.PORT,() => {
//   console.log(`Server  listen at port ${process.env.PORT}`);
// })