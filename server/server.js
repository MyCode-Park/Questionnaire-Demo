const axios = require("axios");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  axios.get("http://localhost:8080/users").then((response) => {
    const data = response.data;
    console.log(data);
    res.send({ message: data });
  });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
