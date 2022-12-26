const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const ErrorHandler = require("../middlewares/errorHandler/errorHandler");
const route = require("./route");

const app = express();
const port = 3000;
app.use(express.json());
app.use(multer().any());
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://HelperImmerse:merichidaku@mycluster.73hcini.mongodb.net/test",

    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB is Connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(port, () => {
  console.log(`Express is Running on ${port}`);
});
app.use(ErrorHandler);
