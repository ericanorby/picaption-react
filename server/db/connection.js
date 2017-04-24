const mongoose = require("mongoose")
mongoose.connect("mongodb://heroku_97t93bv3:r5rpi43ebdmuslv6rn48hus9om@ds163010.mlab.com:63010/heroku_97t93bv3")
const db = mongoose.connection

db.on("error", (err) => {
  console.log(err)
})

db.once("open", () => {
  console.log("database connected!")
})

module.exports = mongoose
