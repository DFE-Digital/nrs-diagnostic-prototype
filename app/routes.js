const v4 = require('./routes-v4')
const v4_2 = require('./routes-v4_2')

const express = require('express')
let router = express.Router()

router = v4.generateRoutesV4(router)
router = v4_2.generateRoutesv4_2(router)

module.exports = router
