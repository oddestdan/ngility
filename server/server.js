const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// MongoDB
const mongoconfig = require("./config/mongodb-config");
const dbURI = process.env.MONGODB_URI || mongoconfig.url;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) =>
    console.error.bind(console, "MongoDB connection error:", err)
  );

app.use(express.json());
app.use(cors());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "*");
//   next();
// });

// If an incoming request uses a protocol other than HTTPS,
// redirect that request to the same url but with HTTPS
// app.use(require("./middleware/forceSSL"));

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + "/dist/ngility"));

const router = express.Router();

router.use("/issue", require("./routes/issue"));

// Register the 'root' router
app.use("/api", router);

// // For all GET requests, send back index.html to use PathLocationStrategy
// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname + "/dist/ngility/index.html"));
// });

const port = process.env.PORT || 12080;
const httpServer = app.listen(port, () => {
  console.log("Server is up and running on port:", port);
});
