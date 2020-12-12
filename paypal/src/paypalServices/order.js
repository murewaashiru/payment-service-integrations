const axios = require('axios');
const dotenv = require( 'dotenv');
dotenv.config();

axios.defaults.baseURL = process.env.PAYPAL_BASE_URL;
axios.defaults.headers['Content-Type'] = 'application/json';

// Alternatively, you can get an access token via your OAuth 2.0 credentials
// https://developer.paypal.com/docs/api/overview/#get-an-access-token
const headers= { 
  auth: {
    username: process.env.PAYPAL_CLIENT_ID,
    password: process.env.PAYPAL_SECRET
  }
 }

/**
 * Checkout an order
 * @param {object} data - transaction data
 * @returns {object} transaction object
 */
const create = async(data) =>{  
  try{
    const response = await axios.post('/v2/checkout/orders', { ...data }, {...headers});
    return response.data
  }
  catch(err){
    return err
  }
}

/**
 * Shows details for an order, by ID
 * @param {object} id - order id
 * @returns {object} order object
 */
const showDetails = async(id) => {
  try{   
    const response = await axios.get(`/v2/checkout/orders/${id}`,  { ...headers} );
    return response.data
  }
  catch(err){
    return err
  }
};

/**
 * Authorize payment for order
 * @param {object} id - order id
 * @returns {object} order object
 */
const authorize = async(id) => {
  try{   
    const response = await axios.post(`/v2/checkout/orders/${id}/authorize`, null, { ...headers} );
    
    console.log(response)
    return response.data
  }
  catch(err){
    return err
  }
};

/**
 * Capture payment for order
 * @param {object} id - order id
 * @returns {object} order object
 */
const capture = async(id) => {
  try{   
    const response = await axios.post(`/v2/checkout/orders/${id}/capture`, null, { ...headers} );
    return response.data
  }
  catch(err){
    return err
  }
};

module.exports = {
  create, showDetails, authorize, capture
}