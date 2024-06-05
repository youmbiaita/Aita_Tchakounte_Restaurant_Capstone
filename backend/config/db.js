const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on('open', () => console.log('Connected to MongoDB'))
  .on('error', (error) => console.log(error));

module.exports = mongoose;
