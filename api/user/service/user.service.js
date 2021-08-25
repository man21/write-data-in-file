const statusCode = require("../../../util/statusCode/statusCode")

const { writeOnFile } = require("../../../util/globalFunctions/writeFile")

const signup = async (data) => {
  try {
    //Business Logic
  } catch (error) {
    return {
      error: statusCode.INTERNAL_SERVER_ERROR,
      status: 500,
      result: null
    }
  }
}

const input1 = async (params) => {
  try {
    var fileName = "output1.txt"
    var result = await writeOnFile(fileName, params.value)

    if (result) return { error: null, status: 200, result: result }
    else
      return {
        error: statusCode.INTERNAL_SERVER_ERROR,
        status: 500,
        result: null
      }
  } catch (error) {
    return {
      error: statusCode.INTERNAL_SERVER_ERROR,
      status: 500,
      result: null
    }
  }
}

const input2 = async (params) => {
  try {
    var fileName = "output2.txt"
    var result = await writeOnFile(fileName, params.value)

    if (result) return { error: null, status: 200, result: result }
    else
      return {
        error: statusCode.INTERNAL_SERVER_ERROR,
        status: 500,
        result: null
      }
  } catch (error) {
    return {
      error: statusCode.INTERNAL_SERVER_ERROR,
      status: 500,
      result: null
    }
  }
}

module.exports = {
  signup,
  input1,
  input2
}
