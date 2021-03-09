const dotenv= require('dotenv');
dotenv.config();

const productsData=require('./data/products');
const connectDb=require('./config/db');
const Product=require('./models/Product');

connectDb();

const importData=async ()=>{
    try{
await Product.deleteMany({});

await Product.insertMany(productsData);

console.log("Data insert succesfully");

process.exit();
    }catch(error){
console.error("Error while inserting data");
process.exit(1);
    }
};

importData();