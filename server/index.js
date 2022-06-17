const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/Posts");
const categoryRoute = require("./routes/categories");
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(express.json());

//MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((err) => console.log({ msg: "MongoDB connection Failed" + err }));

//MiddleWares
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

//Error handling middleWare
app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something went wrong";
  return res.status(errorStatus).json({
    successStatus: false,
    status: error.status,
    message: error.message,
    stack: error.stack,
  });
});

//Port listening
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});
