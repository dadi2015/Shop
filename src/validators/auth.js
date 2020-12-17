const {check, validationResult} = require('express-validator')

exports.validateSignupRequest = [
    check('firstName').notEmpty().withMessage("Поле имя является обязательным"),
    check('lastName').notEmpty().withMessage("Поле фамилия является обязательным"),
    check('email').isEmail().withMessage("Поле email является обязательным"),
    check('password').isLength({min: 6}).withMessage("Пароль должен быть минимум 6 символов")
]

exports.validateSigninRequest = [
    check('email').isEmail().withMessage("Поле email является обязательным"),
    check('password').isLength({min: 6}).withMessage("Пароль должен быть минимум 6 символов")
]

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.array().length > 0){
        return res.status(400).json({error: errors.array()[0].msg})
    }
    next()
}
