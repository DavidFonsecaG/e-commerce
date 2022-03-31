const express = require("express");
const router = express.Router();

const categorieController = require('../controllers/categorieController');

// Private Methods
router.post('/add', categorieController.add );
router.get('/list',categorieController.list);
router.get('/listActives',categorieController.listActives);
router.put('/update',categorieController.update);
router.put('/activate',categorieController.activate);
router.put('/deactivate',categorieController.deactivate);
router.delete('/delete',categorieController.delete);

module.exports = router;
