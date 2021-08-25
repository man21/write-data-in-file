const Router = require("express").Router()
const userController = require("../controller/user.controller")

//Public API
Router.post("/signup", userController.signup)

Router.get("/input1/:value", userController.input1)
Router.get("/input2/:value", userController.input2)

module.exports = Router
