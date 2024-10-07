const express = require ('express');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,('public'))));

app.listen(PORT,()=>{
    console.log(`Web is running on port ${PORT}`);
})