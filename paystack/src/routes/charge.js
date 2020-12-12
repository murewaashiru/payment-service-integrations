const express = require('express');

const Charge = require('../controllers/charge');

const router = express.Router();

router.post('/', Charge.createCharge);
router.get('/:reference', Charge.getPendingCharges);

module.exports = router;
