const express = require('express');
const app = express();
const dotenv = require('dotenv');


const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`Server started on PORT ${PORT}`));
