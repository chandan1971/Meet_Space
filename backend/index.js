import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("mongoDb connected");
})
.catch((err)=>{
    console.log(err);
})

const app=express();

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server running at PORT:${PORT}`);
})

