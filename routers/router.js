const express = require('express');
const controller = require('../controller/controller.js');

const router = express.Router();
router.get("/api/:number", controller.getStudentByNumber);
router.post("/api/:number/update", controller.updateStudent);

module.exports = router;