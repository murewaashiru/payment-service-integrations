const dotenv = require( 'dotenv');
dotenv.config();

const rapid = require('eway-rapid');

const key      = process.env.EWAY_API_KEY,
    password = process.env.EWAY_PASSWORD,
    endpoint = 'Sandbox'; // Use 'Production' when you go live

const client = rapid.createClient(key, password, endpoint);

/**
 * create token customer
 * @param {object} data - customer data
 * @returns {object} transaction object
 */
const createToken = async(data) => {
  try{
    const response = await client.createTransaction(rapid.Enum.Method.DIRECT, data);
    return response.attributes
  }
  catch(err){
    return err
  }
}

/**
 * update customer details
 * @param {object} data - customer data
 * @returns {object} transaction object
 */
const updateToken = async(data) => {
  try{
    const response = await client.updateCustomer(rapid.Enum.Method.DIRECT, data);
    return response.attributes;
  }
  catch(err){
    return err
  }
};

/**
 * get token customer details
 * @param {object} tokenCustomerId - customer id
 * @returns {object} transaction object
 */
const queryToken = async(tokenCustomerId) => {
  try{
    const response = await client.queryCustomer(tokenCustomerId);
    return response.attributes;
  }
  catch(err){
    return err
  }
}

/**
 * charge customer for transaction
 * @param {object} data - transaction data
 * @returns {object} transaction object
 */
const chargeToken = async(data) => {
  try{
    const response = await client.createTransaction(rapid.Enum.Method.DIRECT, data);
    return response.attributes;
  }
  catch(err){
    return err
  }
}

module.exports = {
  createToken, updateToken, queryToken, chargeToken
}