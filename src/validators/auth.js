const {check, validationResult} = require('express-validator')


console.log("Step 1")
exports.validateRequest = [
    check('firstName').notEmpty().withMessage("Поле имя является обязательным"),
    check('lastName').notEmpty().withMessage("Поле фамилия является обязательным"),
    check('email').isEmail().withMessage("Поле email является обязательным"),
    check('password').isLength({min: 6}).withMessage("Пароль должен быть минимум 6 символов")
]
console.log("Step 2")
exports.isRequestValidated = (res, req, next) => {
    console.log("Step 3")
    const errors = validationResult(req)
    console.log("Step 4")
    if(errors.array().length > 0) {
        console.log("Step 5")
        return res.status(400).json({error: errors.array()[0].msg})
    }
}
