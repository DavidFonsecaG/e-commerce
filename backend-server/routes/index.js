const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const productRouter = require('./product');
const categorieRouter = require('./categorie');

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/categorie',categorieRouter);

module.exports = router;

