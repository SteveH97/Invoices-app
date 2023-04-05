import express from "express";
// import { getInvoices, getInvoice, createInvoice, updateInvoice, deleteInvoice} from "../controllers/invoice.js";
import { createInvoice, getInvoices, getInvoice, deleteInvoice } from "../controllers/invoice.js";

const router = express.Router();


// /* READ */
router.get("", getInvoices);
router.get("/:invId", getInvoice);

/* WRITE */
router.post("/create", createInvoice);

// /* UPDATE */
// router.put("/:invId/edit", updateInvoice);

// /* DELETE */ 
router.delete("/:invId/edit/delete", deleteInvoice);


export default router;