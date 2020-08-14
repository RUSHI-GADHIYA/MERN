const express = require('express');
const cors = require('cors');

const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());





const uri = "mongodb://localhost:27017/mern";
mongoose.connect(uri, { useNewUrlParser: true, useCreatIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb db conn established successfuly");
})



const exerciseRouter = require("./routes/exercises");
const userRouter = require('./routes/users')

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);


app.listen(port, () => {
    console.log(`connected to port : ${port}`);

});