const mongoose = require("mongoose");
const config = require("./config.json");

const conxn = config.url + "/" + config.dbname;
// mongoose.connect(
//   conxn,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   function (err, done) {
//     if (err) {
//       console.log("Error connecting to db >>" + err);
//     } else {
//       console.log("db connection success");
//     }
//   }
// );

// for remote
mongoose.connect(
  "mongodb+srv://debid:D4v!d123@cluster0.bumti.mongodb.net/home-tasks?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, done) {
    if (err) {
      console.log("Error connecting to db >>" + err);
    } else {
      console.log("db connection success");
    }
  }
);
