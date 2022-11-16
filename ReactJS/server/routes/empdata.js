import express from 'express';
const router = express.Router();
import {addEmployee, addCustomer, getEmpdata } from "../controllers/empdata.js";

router.get("/:id/empdata", getEmpdata);

router.post("/employee", addEmployee);
router.post("/customer", addCustomer);

export default router;