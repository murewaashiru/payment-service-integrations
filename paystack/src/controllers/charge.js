const {charge, getPendingCharge} = require('../paystackServices/charge')

const createCharge = async(req, res) => {    
    //sample data
    const paymentData = {
        email:'johndoe@gmail.com',
        amount: 10000, // In kobo
        metadata:{
            custom_fields:[
            {
              purpose: "Payment for XYZ",
              full_name: 'John Doe'
            }
          ]
        },
        card:{
            cvv:'408',
            number:'4084084084084081', //Card PAN
            expiry_month:'01',
            expiry_year:'99'
        },
        pin:'0000'
    }
    const result = await charge(paymentData);

    // Perform your own action e.g saving the transaction to your database
    return res.json({result})
}

const getPendingCharges = async(req, res, next) => {
    const {reference} = req.params;
    console.log(`Reference is ${reference}`)
    
    const result = await getPendingCharge(reference);

    // Perform your own action
    return res.json({result})
}

module.exports = {createCharge, getPendingCharges}