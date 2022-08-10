import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import Authroutes from "./routes/Auth.js";
import getVendor from "./routes/GetVendor.js";


const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://Lokisg5656:Loki.sg5656@cluster0.xxu4ojo.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use("/auth",Authroutes);
app.use("/user",getVendor);

app.listen("3001",()=>{
    console.log(`server is running on port ${3001}`)
});