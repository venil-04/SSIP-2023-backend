const express = require("express")
const mongoose = require("mongoose")
var cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors())
const port =12500;
const placeroute = require("./Routes/placeRoutes");

mongoose.connect("mongodb://127.0.0.1:27017/ssip", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) {
    console.error("Mongoose connection error:", err);
  } else {
    console.log("Mongoose is connected");
  }
});


app.use("/app/vr1",placeroute)


app.listen(port,()=>{
    console.log(`server listening on ${port}`)
})
