const axios = require('axios')
const dotenv = require( 'dotenv');
dotenv.config();

axios.defaults.baseURL = process.env.PAYSTACK_BASE_URL;
axios.defaults.headers.Authorization = `Bearer ${process.env.PAYSTACK_SECRET_KEY}`

/**
 * Initialise a payment transaction
 * @param {object} data - transaction data
 * @returns {object} transaction object
 */
const initializeTransaction = async(data) =>{  
  try{
    const response = await axios.post('/transaction/initialize', { ...data });
    return response.data.data
  }
  catch(err){
    return err
  }
}

/**
 * Verify the details of a transaction
 * @param {object} reference - transaction reference
 * @returns {object} transaction object
 */
const verifyTransaction = async(reference) => {
  try{
    const response = await axios.get(`/transaction/verify/${reference}`);
    return response.data.data
  }
  catch(err){
    return err
  }
};

/**
 * List of transactions associated to the business (via the secret key)
 * @returns {Array} array of transaction objects
 */
const listTransaction = async() => {
  try{
    const response = await axios.get(`/transaction`);
    return response.data.data
  }
  catch(err){
    return err
  }
};

module.exports = {
  initializeTransaction, verifyTransaction, listTransaction
}