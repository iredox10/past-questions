import mongoose from "mongoose";

const session = mongoose.Schema({

},{timestamps:true})

const Session =mongoose.model.session || mongoose.model('session',session)