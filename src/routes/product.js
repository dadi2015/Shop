const express = require("express")
const multer = require("multer")
const shortid = require("shortid")
const router = express.Router()
const { adminMiddleware, requireSignin } = require("../common-middleware");
const { createProduct } = require("../controller/product")
const path = require("path")


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), "uploads" ))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + "-" + file.originalname)
    }
})

const upload = multer({ storage })

router.post("/product/create", requireSignin, adminMiddleware, upload.array("productPicture"),  createProduct )


module.exports = router
