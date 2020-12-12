const {initializeTransaction, verifyTransaction, listTransaction} = require('../paystackServices/transactions')

const makePayment = async(req, res) => {
    // sample data    
    const paymentData = {
        email:'johndoe@gmail.com',
        amount:10000,  // In kobo
        reference: `AGFM-${Date.now()}`,
        metadata: {
            custom_fields: [
                {
                    full_name: 'John Doe',
                }
            ]
        }
    }
    const result = await initializeTransaction(paymentData);

    // Perform your own action e.g saving the transaction to your database
    return res.json({result})
}

const verifyPayment = async(req, res) => {
    const {reference} = req.params;

    const result = await verifyTransaction(reference);

    // Perform your own action
    return res.json({result})
}

const listPayment = async(req, res) => {

    const result = await listTransaction();

    // Perform your own action
    return res.json({result})
}

module.exports = {makePayment, verifyPayment, listPayment}