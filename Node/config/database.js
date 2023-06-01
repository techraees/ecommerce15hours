const mongoose = require("mongoose");

// {useNewUrlParser:true,useUnifiedParser:true,useCreateIndex:true}
const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI).then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  });
};
module.exports = connectDatabase;
