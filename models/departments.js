import mongoose from "mongoose";

const department = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
        unique: true
    },
    logo:String,
    sessions:[{
        ref: 'session',
        type: mongoose.Schema.Types.ObjectId
    }]
},{timestamps:true})

const Department =mongoose.model.department || mongoose.model('department', department)