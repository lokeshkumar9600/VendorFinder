//route to get all the vendors for the user 
//comment updated on 11/08/2022

import express from "express";
const router = express.Router();
import VendorAccount from "../models/VendorAccounts.js";

router.get("/getVendors", async (req, res) => {
  VendorAccount.find({}, { VendorLocation: true }, async (err, vendors) => {
    if (err) {
      console.log(err);
    } else {
      let data = await vendors;
      res.json(data);
    }
  });
});

export default router;
