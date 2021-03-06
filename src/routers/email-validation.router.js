const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('./guards/user');

const emailvalidationRoutes = require('./routes/email-validation.routes');

router.get('/my', isLoggedIn, emailvalidationRoutes.getMyEmailValidationTokens);
router.get('/resend-validation-email', isLoggedIn, emailvalidationRoutes.resendValidationEmail);

module.exports = router;
