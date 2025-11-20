import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
     name:{type:String,required:true},
     email:{type:String,required:true,unique:true},
     password:{type:String,required:true},
     gender:{type:String,default:"not selected"},
     address:{type:Object,default:{line1:'',line2:''}},
     dob:{type:String,default:"not selected"},
     phone:{type:String,default:"+1 234 345 6789"},
     image:{type:String,default:"https://res.cloudinary.com/dcd9zwzyn/image/upload/v1696341533/medora/default_user_avatar_rlu5tn.png"},
},{timestamps:true});


const User = mongoose.model("User", userSchema);

export default User;