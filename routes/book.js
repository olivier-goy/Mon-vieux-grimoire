const express = require('express');
const router = express.Router();
const bookCtrl = require("../controllers/book");

router.get('/:id', bookCtrl.getOneBook);
router.get('/', bookCtrl.getAllBooks);

module.exports = router;