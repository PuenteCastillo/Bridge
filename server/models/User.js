const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  familyName: String,
  givenName: String,
  email: String,
  avatar: String,
  locale: String,
});

mongoose.model("users", userSchema);
