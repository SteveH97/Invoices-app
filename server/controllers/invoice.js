import Invoice from "../models/Invoice.js";

export const createInvoice = async ( req, res ) => {

    try{
        const { senderAddress, clientAddress, clientName, clientEmail, paymentDue, paymentTerms, description, items, total, status} = req.body;
    
        const newInvoice = new Invoice({
            senderAddress: senderAddress,
            clientAddress: clientAddress,
            clientName: clientName,
            clientEmail: clientEmail, 
            paymentDue: paymentDue, 
            paymentTerms: paymentTerms, 
            description: description, 
            items: items, 
            total: total, 
            status: status
        })

        const invoice = await newInvoice.save();

        res.status(201).json(invoice);
    } catch (error){
        res.status(409).json({ message: error.message});
    }
}

export const getInvoices = async ( req, res ) => {
    try{
        const invoices = await Invoice.find();

        res.status(200).json(invoices);
    } catch (error){
        res.status(404).json({ message: error.message });
    }
}

export const getInvoice = async ( req, res ) => {
    try{
        const { invId } = req.params;

        const invoice = await Invoice.findById(invId);
        res.status(200).json(invoice);
    }catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteInvoice = async ( req, res ) => {
    try{
        const { invId } = req.params;

        const deleteInvoice = await Invoice.findByIdAndDelete(invId);
        res.status(200).json(deleteInvoice + ' its Gone bruh!!');
    } catch (error){
        res.status(404).json({ message: error.message });
    }
}