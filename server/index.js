import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL = "mongodb+srv://admin_afzal:testing123@cluster0.6dkxj.mongodb.net/social-media?retryWrites=true&w=majority"
const PORT = process.env.PORT || 8000;

const connect = async()=>{
    try {
        return await mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true });   
    } catch (error) {
        console.log(error.message);    
    }
}



app.listen(PORT, async()=>{
    await connect();
    console.log("server is running at 8080");
})