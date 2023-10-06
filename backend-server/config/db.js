const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB connected.');
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    console.log('Error while initializing DB! ' + error);
    process.exit(1);
  }
};

module.exports = connectDB;

