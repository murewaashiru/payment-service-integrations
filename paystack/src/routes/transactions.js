const express = require('express');

const Transaction = require('../controllers/transactions');

const router = express.Router();

router.get('/', Transaction.listPayment)
router.post('/initialize', Transaction.makePayment);
router.get('/verify/:reference', Transaction.verifyPayment);

module.exports = router;
