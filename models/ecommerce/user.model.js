import mongoose from "mongoos"

// Suggested code may be subject to a license. Learn more: ~LicenseLog:2880509895.
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

export const User=mongoose.model("User",UserSchema)


