const express=require('express')
const Product=require('./models/product.model.js');
const productRoute=require("./routes/product.route.js");
const app=express();
const port=3000;

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://allwintitus491:7p5eApXT4tx3wDmN@backenddb.s9dgxaw.mongodb.net/?retryWrites=true&w=majority&appName=BackendDb")
.then(()=>{
    console.log("Connected to database!!");
})
.catch((error)=>{
    console.error('error', error)
    console.log("Connection Failed");
});



//middle wares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use("/api/products",productRoute);

app.listen(port,()=>{
    console.log(`Server is running in ${port}`);
    });
    