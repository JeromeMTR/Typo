require('dotenv').config();
const path = require('path');
const express = require('express');
const router = require('./router.js');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/typo', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
