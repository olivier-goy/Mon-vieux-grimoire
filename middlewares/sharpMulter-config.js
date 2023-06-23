const multer = require("multer");
const SharpMulter = require("sharp-multer");

const storage = SharpMulter({
  destination: (req, file, callback) => {
    file.originalname.split(" ").join("_");
    callback(null, "images");
  },
  imageOptions: {
    resize: { with: 50 },
    fileFormat: 'webp',
    useTimestamp: true
  }
});

module.exports = multer({ storage: storage }).single("image");
