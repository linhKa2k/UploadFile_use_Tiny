const mongoose = require('mongoose')
const ItemModel = new mongoose.Schema({
    title: String ,
    content: String ,
    arrNameImg: Array
})
module.exports = mongoose.model("RealTiny", ItemModel)