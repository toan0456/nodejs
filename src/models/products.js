import { required } from "joi";
import mongoose from "mongoose";

const productsModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

export default mongoose.model("Products", productsModel)