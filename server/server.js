const express = require('express');
const dotenv=require('dotenv');
dotenv.config();
const connectDb = require('./config/db');
const app = express();
const productRoutes=require('./routes/productRoutes');

connectDb();
app.use(express.json());

app.use('/api/products',productRoutes)

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>console.log('Server is running on port ',PORT));