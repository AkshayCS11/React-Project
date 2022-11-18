import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';

// import roleModel from '../models/rolemodel.js';
// const { authUser, authRole } = require('./basicAuth')
import { authuser, authrole } from './basicAuth.js';

// import {addEmployee, addCustomer, getEmpdata } from "../controllers/empdata.js";
import user from '../models/user.js'
// const User = await user.findOne({ email });

router.get("/admin", authuser, authrole(user.admin));

router.post("/projectManager", );
router.post("/programManager", );

export default router;