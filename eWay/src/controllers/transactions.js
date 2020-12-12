const {createToken, updateToken, queryToken, chargeToken} = require('../ewayServices/tokenPayment')

const createTransaction = async(req, res) => {
    const paymentData = {
        "Customer": {
          "Title": "Mr.",
          "FirstName": "John",
          "LastName": "Smith",
          "Email": "johnsmith@gmail.com",
          "Country": "au",
          "CardDetails": {
            "Name": "John Smith",
            "Number": "4444333322221111",
            "ExpiryMonth": "12",
            "ExpiryYear": "25",
            "CVN": "123"
          }
        },
        "Payment": {
          "TotalAmount": 1000
        },
        "TransactionType": "Purchase"
      }
        
      const result = await createToken(paymentData);

    // Perform your own action e.g save the TokenCustomerID to your database
    return res.json({result})
}

const updateTransaction = async(req, res) => {
    const paymentData = {
      "TokenCustomerID": "917758625852",
      "Title": "Mr.",
      "FirstName": "John",
      "LastName": "Smith",
      "Country": "au",
      "CardDetails": {
       "Name": "John Smith",
       "Number": "4444333322221111",
       "ExpiryMonth": "12",
       "ExpiryYear": "25",
       "CVN": "123"
      }
    }
    const result = await updateToken(paymentData);

    // Perform your own action
    return res.json({result})
}

const queryTransaction = async(req, res) => {
    const tokenCustomerId = 917758625852;

    const result = await queryToken(tokenCustomerId);

    // Perform your own action
    return res.json({result})
}

const chargeTransaction = async(req, res) => {
  const paymentData = {
    "Customer": {
      "TokenCustomerID": 917758625852
    },
    "Payment": {
      "TotalAmount": 1000
    },
    "TransactionType": "Recurring"
  }

    const result = await chargeToken(paymentData);

    // Perform your own action
    return res.json({result})
}

module.exports = {createTransaction, updateTransaction, queryTransaction, chargeTransaction}