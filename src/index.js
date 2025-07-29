// require("dotenv").config({path: "./.env"});
import dotenv from "dotenv"

import mongoose, { connect } from "mongoose"
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js"
import express from "express" 
import userRouter from "./routes/user.routes.js"
import {app} from "./app.js"

dotenv.config({ path: './.env' })

app.on("error", (error) => {
    console.error("Express app error:", error);
    throw error;
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running at port : ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB connection error")
    })
