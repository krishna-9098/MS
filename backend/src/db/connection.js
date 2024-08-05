const mongoose = require("mongoose")

async function connectDB(uri){
    await mongoose.connect(uri).then(() => {
        console.log("mongoDB Connected");
    }).catch((err) => {
        console.log("Following problem occured in connecting mongoDB: ", err);
    })
}

module.exports = {
    connectDB
}