import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique: true,
        required: true,
        
    },
    email:{
        type:String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required:true,
    },
    avatar:{
        type: String,
        default:'https://img.freepik.com/premium-photo/cartoon-character-from-anime-called-he-is-character_662214-189789.jpg'
    },

}, {timestamps:true});

const User= mongoose.model('User',userSchema);

export default User;