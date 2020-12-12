const axios = require('axios')
const dotenv = require( 'dotenv');
dotenv.config();

axios.defaults.baseURL = process.env.PAYSTACK_BASE_URL;
axios.defaults.headers.Authorization = `Bearer ${process.env.PAYSTACK_SECRET_KEY}`

/**
 * Creating charge on customer's account
 * @param {object} data - transaction data
 * @returns {object} transaction object
 */
const charge = async(data) =>{  
  try{
    const response = await axios.post('/charge', { ...data });
    return response.data.data
  }
  catch(err){
    return err
  }
}

/**
 * Verify the details of a charge
 * @param {object} reference - transaction reference
 * @returns {object} transaction object
 */
const getPendingCharge = async(reference) => {
  try{   
    const response = await axios.get(`/charge/${reference}` );    
    return response.data.data
  }
  catch(err){
    return err
  }
};

module.exports = {
  charge, getPendingCharge
}