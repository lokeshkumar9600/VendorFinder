// Schema for vendor data model for
// not validated or modified for authentication
// have to modify to complete full project
// Comment added on 11/08/2022

import mongoose from "mongoose";
const vendorAccountSchema = new mongoose.Schema({
  VendorEmail: {
    type: String,
    required: true,
    unique: true,
  },
  VendorPassword: {
    type: String,
    required: true,
    unique: true,
  },
  VendorLocation: {
    VendorLatitude: {
      type: Number,
    },
    VendorLongitude: {
      type: Number,
    },
  },
});

const VendorAccount = mongoose.model("VendorAccount", vendorAccountSchema);
export default VendorAccount;
