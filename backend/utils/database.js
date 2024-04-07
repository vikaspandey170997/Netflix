import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config({
  path:"../.env"
})

const databaseConnection = () => {
  mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://vikaspandey9969:netflix@cluster0.qdowb8t.mongodb.net/').then(()=>{
    console.log("mongodb connected successfully");
  }).catch((error)=>{
    console.log(error);
  })
};

export default databaseConnection;