const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const SharpMulter = require("../middlewares/sharpMulter-config");
const bookCtrl = require("../controllers/book");

router.post("/", auth, SharpMulter, bookCtrl.creatingBook);
router.post("/:id/rating", auth, bookCtrl.creatingRating);
router.put("/:id", auth, SharpMulter, bookCtrl.modifyBook);
router.delete("/:id", auth, bookCtrl.deleteBook);
router.get("/bestrating", bookCtrl.getBestBooks);
router.get("/:id", bookCtrl.getOneBook);
router.get("/", bookCtrl.getAllBooks);

module.exports = router;
