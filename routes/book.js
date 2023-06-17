const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer-config");
const bookCtrl = require("../controllers/book");

router.post('/', auth, multer, bookCtrl.creatingBook);
router.put('/', auth, multer, bookCtrl.modifyBook);
router.delete('/:id', auth, bookCtrl.deleteBook);
router.get('/bestrating', bookCtrl.getBestBooks);
router.get('/:id', bookCtrl.getOneBook);
router.get('/', bookCtrl.getAllBooks);

module.exports = router;