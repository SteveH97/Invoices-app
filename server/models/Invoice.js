import mongoose from "mongoose";

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    senderAddress: {
        street:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        postCode:{
            type: String,
            required: true
        },
        country:{
            type: String,
            required: true
        }
    },
    clientAddress: {
        street:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        postCode:{
            type: String,
            required: true
        },
        country:{
            type: String,
            required: true
        }
    },
    clientName:{
        type: String,
        required: true
    },
    clientEmail:{
        type: String,
        required: true
    },
    paymentDue:{
        type: Date,
        required: true
    },
    paymentTerms:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    items:{
        type: Array,
        default: []
    },
    total:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        required: true
    }

});

const Invoice = mongoose.model("Invoice", invoiceSchema);
export default Invoice;