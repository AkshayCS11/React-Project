import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {sendmail} from "./helpers/sendEmail.js"
import UserModal from "../models/user.js";

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName, confirmPassword } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    if(password!==confirmPassword) return res.status(400).json({ message: "Passwords don't match" });

    const hashedPassword = await bcrypt.hash(password, 12);

    let code = Math.floor(100000 + Math.random() * 900000);

    let expiry = Date.now() + 60 * 1000 * 15; //15 mins in ms

    // const sendCode = sendmail(email, code);

    // if (sendCode.error) return res.status(500).json({ error: true, message: "Couldn't send verification email.", });
    

    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, emailToken:code, emailTokenExpires: new Date(expiry) });

    // const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result});

  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};

export const activate = async (req, res) => {
  const { email, emailToken } = req.body;

  try {
    console.log("hello",req.body)

    if (!email || !emailToken) return res.status(400).json({ message: "Please make a valid request" }); 
      
    const result = await UserModal.findOne({ email: email, emailToken: emailToken, emailTokenExpires: { $gt: Date.now() } });

    if (!result) return res.status(400).json({ message: "Invalid details" });

    else {
      if (result.active) return res.send({ error: true, message: "Account already activated", status: 400 });

      result.emailToken = "";
      result.emailTokenExpires = null;
      result.active = true;

      await result.save();
      console.log("User Activation completed")
    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

      return res.status(201).json({ result, token });
      // return res.status(200).json({ success: true, message: "Account activated.", });
    }
  } catch (error) {

      console.error("activation-error", error);
      return res.status(500).json({ error: true, message: error.message, });

    }

};
