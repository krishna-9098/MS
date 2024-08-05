const express = require('express');
const { adminRegister, adminLogin } = require('../../controller/adminContoller/admin.controller');
const { authenticateToken, authorizeRoles } = require('../../middleware/authMiddleware');

const router = express.Router();

router.post('/register', adminRegister);
router.post('/login', adminLogin);
router.get('/', authenticateToken, authorizeRoles('admin'), (req, res) => {
  res.send('This is a protected route accessible only by admins');
});

module.exports = router;
