const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.get('/', menuController.getAllMenus);
router.post('/addMenu', menuController.createMenu);
router.get('/:id', menuController.getMenuById);
router.put('/:id', menuController.updateMenuById);
router.delete('/:id', menuController.deleteMenuById);

module.exports = router;
