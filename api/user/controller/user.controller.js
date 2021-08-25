const userService = require("../service/user.service")
const statusCode = require("../../../util/statusCode/statusCode")

/**
 * @access  Public
 * @Method  POST
 * @route   user/signup
 * @input   name, email, password
 * @desc    provide a signup
 */
const signup = async (req, res) => {
  var body = req.body
  if (!body.name || !body.email || !body.password) return res.status(400).send({ message: statusCode.BAD_REQUEST })

  var emailValidation = validation.emailValidator(body.email)
  if (!emailValidation) return res.status(400).send({ message: statusCode.INVALID_EMAIL_FORMAT })

  var passwordValidation = validation.passwordValidator(body.password)
  if (!passwordValidation) return res.status(400).send({ message: statusCode.INVALID_PASSWORD_FORMAT })

  const { error, status, result } = await userService.signup(body)
  if (error) return res.status(status).send(error)
  else res.status(status).send(result)
}

/**
 * @access  Public
 * @Method  GET
 * @route   user/input1/:value
 * @input
 * @desc    add value in txt file
 */
const input1 = async (req, res) => {
  if (!req.params.value) return res.status(400).send({ message: statusCode.BAD_REQUEST })

  const { error, status, result } = await userService.input1(req.params)
  if (error) return res.status(status).send(error)
  else res.status(status).send(result)
}

/**
 * @access  Public
 * @Method  GET
 * @route   user/input2/:value
 * @input
 * @desc    add value in txt file
 */
const input2 = async (req, res) => {
  if (!req.params.value) return res.status(400).send({ message: statusCode.BAD_REQUEST })

  const { error, status, result } = await userService.input2(req.params)
  if (error) return res.status(status).send(error)
  else res.status(status).send(result)
}

module.exports = {
  signup,
  input1,
  input2
}
