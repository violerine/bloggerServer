const mongoose = require("mongoose")
const Schema = mongoose.Schema
var timestamps = require('mongoose-timestamp')

const articleSchema = new Schema({
    title:String,
    content:String,
    pic_url:String,
})

articleSchema.plugin(timestamps)
mongoose.model('article',articleSchema)

const article = mongoose.model('article',articleSchema)

module.exports=article