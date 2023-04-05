import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import invoiceRoutes from "./routes/invoice.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

/* ROUTES */
app.use("/invoice", invoiceRoutes);

/* MONGOOSE SETUP */    
const PORT = process.env.PORT || 6002;

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    .then(()=>{
        app.listen(PORT, () => console.log(`Server is up bruh: ${PORT}`));
    })
    .catch((error)=> console.log(`${error} || nah fam`));
