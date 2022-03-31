const express =  require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// Private Methods
router.post('/add', userController.add);
router.get('/list', userController.list);
router.put('/update', userController.update);
router.put('/enabled', userController.enabled);
router.put('/disabled', userController.disabled);

//Public Methods
router.post('/login', userController.login);

module.exports = router;
