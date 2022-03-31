require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const options = { useNewUrlParser: true, useUnifiedTopology: true };
    await mongoose.connect(process.env.MONGO_URI, options);

    console.log('Database sucessfully connected!');
  } catch (error) {
    console.log('Error while initializing DB!' + error);
    process.exit(1);
  }
}

module.exports = connectDB;
