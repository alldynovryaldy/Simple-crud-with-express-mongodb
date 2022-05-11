const { body, validationResult } = require('express-validator');

exports.post = [
  body('nama').notEmpty().withMessage('Nama tidak boleh kosong'),
  body('body').notEmpty().withMessage('Body tidak boleh kosong'),
  body('published').notEmpty().withMessage('Published tidak boleh kosong'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
