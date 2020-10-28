const express = require('express')
const {validateRequest, isRequestValidated} = require('../validators/auth')
const {signup, signin, requireSignin} = require('../controller/auth')
const router = express.Router()


router.post('/signup', validateRequest, isRequestValidated, signup)

router.post('/signin', signin)

router.post('/profile', requireSignin, (req, res) => {
    res.status(200).json({ user: "profile"})
})


module.exports = router
