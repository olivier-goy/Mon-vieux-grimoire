const Book = require("../models/Book");
const fs = require("fs");

exports.creatingBook = (req, res, next) => {
  const objectBook = JSON.parse(req.body.book);
  delete objectBook._id;
  delete objectBook._userId;
  const book = new Book({
    ...objectBook,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  book
    .save()
    .then(() => res.status(200).json({ message: 'livre enregistré !' }))
    .catch(error => res.status(404).json(error));
}

exports.deleteBook = (req, res, next) => { 
  Book.findOne({ _id: req.params._id })
    .then(book => {
      if (book.userId !== req.auth.userId) {
        res.status(403).json({ message: "Unauthorized request" })
      } else {
        const filename = req.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Book.deleteOne({ _id: req.params._id })
            .then(() => res.status(200).json({ message: "Livre supprimé !" }))
            .catch(error => res.status(404).json(error));
        })
       }
    })
  .catch(error => res.status(500).json(error));
 }

exports.getOneBook = (req, res, next) => {
  Book.findOne({ _id: req.params.id })
    .then((books) => res.status(200).json(books))
    .catch((error) => res.status(400).json(error));
}

exports.getAllBooks = (req, res, next) => {
  Book.find()
    .then((books) => res.status(200).json(books))
    .catch((error) => res.status(400).json(error));
};
