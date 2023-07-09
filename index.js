require('module-alias/register');
const express = require('express');
const bodyParser = require('body-parser');
const baseRoute = require('@root/routes/base.route');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/base', baseRoute);

const port = process.env.PORT || 3004;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
