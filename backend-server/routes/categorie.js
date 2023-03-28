const express = require('express');
const {
  add,
  list,
  listActives,
  update,
  activate,
  deactivate,
  remove,
} = require('../controllers/categorieController.js');

const router = express.Router();

// Private Methods
router.post('/add', add);
router.get('/list', list);
router.get('/listActives', listActives);
router.put('/update', update);
router.put('/activate', activate);
router.put('/deactivate', deactivate);
router.delete('/delete', remove);

module.exports = router;
