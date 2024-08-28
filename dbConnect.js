const mongoose = require("mongoose");

const dbConnect = () => {
  const connectionParams = { useNewUrlParser: true };
  // mongoose.connect(process.env.DB,connectionParams);
  const DB = process.env.DB;
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
     
    })
    .then(() => {
      console.log("db connection successful");
    });

  // mongoose.connection.on("connected",()=>{
  //     console.log("connected to database successfully")
  // })

  // mongoose.connection.on("error",(err)=>{
  //     console.log("error while connecting to database" + err)
  // })

  // mongoose.connection.on("disconnected",()=>{
  //     console.log("mongodb connection diconnected");
  // })
};
module.exports = dbConnect;
