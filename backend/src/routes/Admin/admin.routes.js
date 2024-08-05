const express = require('express');
const {deleteAdminById, getAllAdmin, updateAdminById, getAdminById} = require('../../controller/adminContoller/admin.controller')

const router = express.Router()

router.get('/', getAllAdmin);
router.get('/:id', getAdminById);
router.patch('/:id', updateAdminById)
router.delete('/:id', deleteAdminById)

module.exports = router