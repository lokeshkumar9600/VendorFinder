// this is an authentication router to add a vendor and add a user to the database
// Comment added on 11/08/2022

import express from "express";
const router = express.Router();
import UserAccount from "../models/UserAccounts.js";
import VendorAccount from "../models/VendorAccounts.js";

router.post("/addUser", async (req, res) => {
  const { UserEmail, UserPassword } = req.body;
  try {
    const addUser = await UserAccount.create({
      UserEmail: UserEmail,
      UserPassword: UserPassword,
    });
    res.json(addUser);
  } catch (e) {
    console.log(e);
  }
});

router.post("/addVendor", async (req, res) => {
  const { VendorEmail, VendorPassword, VendorLatitude, VendorLongitude } =
    await req.body;
  const addVendor = await VendorAccount.create(
    {
      VendorEmail: VendorEmail,
      VendorPassword: VendorPassword,
      VendorLocation: {
        VendorLatitude: VendorLatitude,
        VendorLongitude: VendorLongitude,
      },
    },
    (err, save) => {
      if (err) {
        console.error(err);
      } else {
        console.log(save);
      }
    }
  );
});

export default router;
