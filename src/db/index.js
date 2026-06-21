import mongoose from "mongoose"

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("✅ mongoDB connected")
    }
    catch(error){
        console.error("❌ MongoDB connection error", error)
        console.log("========================================")
    console.log(process.env.MONGO_URI)
        process.exit(1)
    }
    // console.log("========================================")
    // console.log(process.env.MONGO_URI)
}

export default connectDB