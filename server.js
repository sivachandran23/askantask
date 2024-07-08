const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const coffeeRoutes = require('./routes/coffee');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/coffee', { useNewUrlParser: true, useUnifiedTopology: true });


app.use('./api/coffee', coffeeRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
