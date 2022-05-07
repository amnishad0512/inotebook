const mongoose = require("mongoose");
const mongoURI = "mongodb://root:root@localhost:27017/users";

const connectToMongo = () => {
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongoDB")
    })
};

module.exports = connectToMongo;  