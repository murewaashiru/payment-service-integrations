const {create, showDetails, authorize, capture} = require('../paypalServices/order')

const createOrder = async(req, res) => {
  // sample data
  const paymentData = {
    intent: "CAPTURE",  // CAPTURE or AUTHORIZE
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "100.00"
        }
      }
    ]
  }

  const result = await create(paymentData);

    // Hint: Users should be redirected to the href in "rel": "approve" for checkout
    // Perform your own action
    return res.json({result})
}

const getOrder = async(req, res) => {
  const {id} = req.params;

  const result = await showDetails(id);

  // Perform your own action
  return res.json({result})
}

// Client MUST checkout before calling this method
// Use if the order was created with an intent='AUTHORIZE'
const authorizePayment =  async(req, res) => {  
  const {id} = req.params;

  const result = await authorize(id);

  // Perform your own action
  return res.json({result})
}

// Client MUST checkout before calling this method
// Use if the order was created with an intent='CAPTURE'
const capturePayment =  async(req, res) => {
  const {id} = req.params;

  const result = await capture(id);

  // Perform your own action
  return res.json({result})
}

module.exports = {createOrder, getOrder, authorizePayment, capturePayment}