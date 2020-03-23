const v4 = require('./routes-v4')
const v4_2 = require('./routes-v4_2')
const v5 = require('./routes-v5')
const v6 = require('./routes-v6')
const v6_demo = require('./routes-v6-demo')
const v7 = require('./routes-v7')
const v8_ul = require('./routes-v8-ul')

const express = require('express')
let router = express.Router()

router = v4.generateRoutesV4(router)
router = v4_2.generateRoutesv4_2(router)
router = v5.generateRoutesv5(router)
router = v6.generateRoutesV6(router)
router = v6_demo.generateRoutesV6Demo(router)
router = v7.generateRoutesV7(router)
router = v8_ul.generateRoutesV8_ul(router)

module.exports = router
