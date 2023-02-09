const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
// Register a User
exports.registerUser = catchAsyncErrors( async (req,res,next)=>{

    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"this is a sample id",
            url:"profilepicUrl"
        },
    });

    sendToken(user,201,res)
})

// Login a User
exports.loginuser = catchAsyncErrors(async (req,res,next)=>{

    const {email,password} = req.body;

    // Checking if the user has given password and email both

    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email & Password",400))
    }

    const user = await User.findOne({ email }).select("+password");
  
    if(!user){
        return next(new ErrorHandler("Invalid email or password",401))
    }
 
    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401))
    }

    sendToken(user,200,res)
});


// Logut User

exports.logout = catchAsyncErrors(async (req,res,next)=>{

    res.cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly:true,
    })
    res.status(200).json({
        sucess:true,
        message:"Logged Out",
    })
})