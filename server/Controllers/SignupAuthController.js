const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken")
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

module.exports.Signup = async (req, res, next) => {

  try {
    //TODO: check if user already Exist or not?
    //requesting to get the value from body using req.body
    const { email, password, username, createdAt } = req.body;

    // const existingUser = await User.findOne({ email });
    const existingUser = await User.findOne({ email: req.body.email });


    //TODO: if user already exist then response 'User Already Exists' 
    if (existingUser) {
      return res.json({ message: "User Already Exists" });
    }


    //TODO: IF not exist then create user
    const user = await User.create({ email, password, username, createdAt })
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({ message: "User signed in successfully", success: true, user })

    next();
  } catch (err) {
    console.error(err)
  }
}