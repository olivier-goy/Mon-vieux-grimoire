const express = require("express");
const router = express.Router();
const multer = require("../middlewares/multer-config");
const bookCtrl = require("../controllers/book");

router.post('/', multer, bookCtrl.creatingBook)
router.get('/:id', bookCtrl.getOneBook);
router.get('/', bookCtrl.getAllBooks);

module.exports = router;