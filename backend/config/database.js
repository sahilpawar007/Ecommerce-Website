const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.set('strictQuery',false);
    mongoose.connect(process.env.DB_URI,)
    .then(()=>console.log("connected successfull..."))
    .catch((err)=>console.log(err));
};

module.exports = connectDatabase;