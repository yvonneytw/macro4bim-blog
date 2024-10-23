import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  emailVerified: { type: Boolean },
  newsletter: { type: Boolean },
});

// MIDDLEWARE
// userSchema.pre("init", function (next) {
//   this.username = this.password.split("@")[0];
// });

const User = model("User", userSchema);
export default User;
