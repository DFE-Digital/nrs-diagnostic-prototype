const v4 = require('./views/main/v4/routes-v4')
const v4_2 = require('./views/main/v4-2/routes-v4_2')
const v5 = require('./views/main/v5/routes-v5')
const v6 = require('./views/main/v6/routes-v6')
const v6_demo = require('./views/main/v6-demo/routes-v6-demo')
const v7 = require('./views/main/v7/routes-v7')
const v8_ul = require('./views/main/v8-ul/routes-v8-ul')
const v8_hj = require('./views/main/v8-hj/routes-v8-hj')

const express = require('express')
let router = express.Router()

router = v4.generateRoutesV4(router)
router = v4_2.generateRoutesv4_2(router)
router = v5.generateRoutesv5(router)
router = v6.generateRoutesV6(router)
router = v6_demo.generateRoutesV6Demo(router)
router = v7.generateRoutesV7(router)
router = v8_ul.generateRoutesV8_ul(router)
router = v8_hj.generateRoutesV8_hj(router)

module.exports = router
