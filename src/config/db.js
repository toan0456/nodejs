import mongoose from "mongoose";

const mongooseDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Test')
        console.log("Ket noi thanh cong")
        
    } catch (error) {
        console.log(error)
    }
}

export default mongooseDB