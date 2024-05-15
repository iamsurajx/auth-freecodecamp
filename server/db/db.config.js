const mongoose = require('mongoose');
const { MONGO_URL } = process.env;

const connectDB = async () => {
  await mongoose.connect(MONGO_URL)
    .then(() => {
      console.warn("MongoDB is  connected successfully")
    })
    .catch((err) => {
      console.error(err)
    })
}

module.exports = connectDB;