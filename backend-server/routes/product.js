const express = require("express");
const router = express.Router();

const productController = require('../controllers/productController');

// Private Methods 
router.post('/add', productController.add );
router.get('/list',productController.list);
router.get('/listActives',productController.listActives);
router.put('/update',productController.update);
router.put('/activate',productController.activate);
router.put('/deactivate',productController.deactivate);
router.delete('/delete',productController.delete);

module.exports = router;
