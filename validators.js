const { body, validationResult } = require('express-validator');

const userValidationRules = () => {
  return [
    body('email').isEmail().withMessage('Enter a valid email address'),
    body('phone').isMobilePhone().withMessage('Enter a valid phone number'),
    body('birthday').isDate({ format: 'MM/DD/YYYY' }).withMessage('Enter a valid date of birth'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  userValidationRules,
  validate
};
