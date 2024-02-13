import mongoose from "mongoose";

const school = mongoose.Schema({
        name:{
                type: String, 
                required: true,
                unique: true
        },
        email:{
                type: String,
                required: true,
                unique: true
        },
        website:{
                type: String,
                required: true,
                unique: true
        },
        desc:{
                type: String,
                required: true,
                unique: true
        },
        departments: [{
                ref: 'department',
                type: mongoose.Schema.Types.ObjectId
}]
},{timestamps:true})

const School =mongoose.model.school || mongoose.model('school', school)