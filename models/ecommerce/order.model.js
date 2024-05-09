import mongoose from "mongoose"

const orderItemSchema=new mongoose.Schema({
    productId:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    }
}) //mini model made for the orderItem field in orderSchema

const oderSchema= new mongoose.Schema({
    price:{
        type:Number,
        required:true,
    },
    customer:{
        type:String,
        required:true,
    },
    orderItem:{
        type:[orderItemSchema],
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["pending","cancelled","delivered"], //enum made this field compulsary that only those value can be entered
        default:"pending",
        required:true,
    },
},{timestamps:true})

export const Order=mongoose.model("Order",OrderSchema)
