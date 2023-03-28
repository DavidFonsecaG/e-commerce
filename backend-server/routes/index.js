const express = require('express');
const router = express.Router();

const userRouter = require('./user.js');
const productRouter = require('./product.js');
const categorieRouter = require('./categorie.js');

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/categorie',categorieRouter);

module.exports = router;

