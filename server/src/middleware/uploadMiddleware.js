const multer = require('multer');
const path = require('path');

// Storage config: files saved to /uploads with original filename (consider sanitizing in prod)
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');  // Upload folder at server root
  },
  filename: function(req, file, cb) {
    // Append timestamp to filename to avoid conflicts
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

// Filter files by image mimetype
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) cb(null, true);
  else cb(new Error('Only image files are allowed'), false);
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
