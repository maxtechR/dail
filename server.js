const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

const app=express();
app.use(express.json());

//configure express to parse json
app.use(express.json());

//connect to mongoDB
mongoose
.connect(key.mongoURI,{
    userNewUrlParser: true,
    useCreateIndex: true,
})
.then(() => {
    console.log("MongoDB connected");
})
.catch(err => console.log(err));

//setup PORT
const port=process.env.port || 5000;

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})