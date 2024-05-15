const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken")
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

module.exports.Login = async (req, res, next) => {
  try {
    // TODO: Check email or Password 
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: 'All Fields are requires' })
    }

    // TODO: Check if email is correct or not?
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: 'Incorrect password or email' })
    }

    // TODO: Check if password is correct or not?
    const auth = await bcrypt.compare(password, user.password)
    if (!auth) {
      return res.json({ message: 'Incorrect Password or email' })
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
  }
}