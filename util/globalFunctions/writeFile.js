const fs = require("fs")
const writeOnFile = (fileName, data) => {
  try {
    var writeStream = fs.createWriteStream(fileName, {
      flags: "a" // 'a' means appending (old data will be preserved)
    })

    writeStream.write(`${data} \r\n`)
    writeStream.end()
    return true
  } catch (e) {
    return false
  }
}

module.exports = {
  writeOnFile
}
