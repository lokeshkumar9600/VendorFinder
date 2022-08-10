// Schema for user data model
// Authentication Not added
//comment added on 11/08/2022

import mongoose from "mongoose";
const UserAccountSchema = new mongoose.Schema({
  UserEmail: {
    type: String,
    required: true,
    unique: true,
  },
  UserPassword: {
    type: String,
    required: true,
  },
});

const UserAccount = mongoose.model("UserAccount", UserAccountSchema);
export default UserAccount;
