const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const authRoute = require("./routes/auth");
// const User = require("./models/User");
const userRoute = require("./routes/users");
const postRoute = require("./routes/Posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");

//middleware
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

//MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((err) => console.log({ msg: "MongoDB connection Failed" + err }));

//Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

//MiddleWares
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

//Port listening
app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
