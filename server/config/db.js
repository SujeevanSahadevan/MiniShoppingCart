const dotenv=require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const connectDb = async()=>{
    try{
await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

console.log("Mongo DB connected")
    }catch(error){
console.log("Mongo DB connection failed");
process.exit(1);
    }
}


module.exports=connectDb;