const express = require('express');
const Order = require('../controllers/order');

const router = express.Router();

router
    .post('/', Order.createOrder);

router
    .get('/:id', Order.getOrder);

router
    .post('/:id/authorize', Order.authorizePayment);

router
    .post('/:id/capture', Order.capturePayment);

module.exports = router;
