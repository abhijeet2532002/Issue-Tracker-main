const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Nitish:nitish33@cluster0.ksobj.mongodb.net/CSV_upload?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to Database :: MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
