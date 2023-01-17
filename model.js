let mongoose = require('mongoose')
let blogSchema = new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    posted_at:{type:String},
    posted_by:{type:String}
})
let Blog = mongoose.model('blogs',blogSchema);
module.exports= Blog