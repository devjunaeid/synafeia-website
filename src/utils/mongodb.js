import mongoose from "mongoose";

const connetMongo = async () => {
    try {
        if(mongoose.connection.readyState === 0){
            await mongoose.connect(process.env.DB_URI);
        }
        console.log("DB connected!!")
    } catch (error) {
        console.log(error);
    }
}

export default connetMongo;