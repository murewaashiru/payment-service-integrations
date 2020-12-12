const express = require('express');

const Transaction = require('../controllers/transactions');

const router = express.Router();

router
    .post('/', Transaction.createTransaction)
    .patch('/', Transaction.updateTransaction)
    .get('/', Transaction.queryTransaction)
    .post('/charge', Transaction.chargeTransaction);

module.exports = router;
