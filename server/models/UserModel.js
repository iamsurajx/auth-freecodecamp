const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");


// user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Your Email is required"],
    unique: true
  },
  username: {
    type: String,
    require: [true, "Your Username is required"],
    unique: true
  },
  password: {
    type: String,
    require: [true, "Your Password is required"],
    unique: true
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})


//
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);

{/*
This section defines a pre-save hook for the user schema. This hook is executed before saving a user document to the database. It ensures that the user's password is hashed using bcryptjs before being stored in the database.

1. pre("save"): This method is used to define middleware functions to be executed before a document is saved.

2. async function () { ... }: This is the middleware function that hashes the user's password asynchronously using bcrypt.hash.

3. this.password: Refers to the password field of the current user document being saved.

4. await bcrypt.hash(this.password, 12): Hashes the password using bcrypt with a salt round of 12. The higher the salt round, the more secure but slower the hashing process.

The user schema and user password will be created in the above code using mongoose and bcryptjs, respectively, for security purposes.

The password is hashed for security reasons prior to saving the user.*/}