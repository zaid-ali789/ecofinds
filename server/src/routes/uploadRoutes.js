const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');

router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  // Return public URL path for the uploaded file
  const imageUrl = `/uploads/${req.file.filename}`;
  res.json({ imageUrl });
});

module.exports = router;
