require("dotenv").config();
require("./config/mongo");

const express = require("express");
const server = express();
const cors = require("cors");

server.use(express.json());

server.use(cors("*"));

server.get("/", (req, res) => {
  res.send("response get ok");
});

// ROUTING
const tshirtsRouter = require("./routes/tshirts");

server.use(tshirtsRouter);

server.listen(process.env.PORT, () => {
  console.log("simple-backend started @ http://localhost:" + process.env.PORT);
});
