import express from "express";
import dotenv from "dotenv";
import dbConnection from "./database/databaseConnection.js";
import userRouter from "./routes/users.js";

dotenv.config({path:"./config/config.env"});

const app = express();
app.use("/api/users",userRouter);

dbConnection();
app.listen(process.env.PORT_NO,() => {
    console.log("server is connected");
})