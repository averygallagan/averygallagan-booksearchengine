const mongoose = require('mongoose');

// Temporarily hardcoding the URI for testing
const dbURI = 'mongodb+srv://avery:Caveman3@cluster0.xiexsec.mongodb.net/googlebooks?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

module.exports = mongoose.connection;
