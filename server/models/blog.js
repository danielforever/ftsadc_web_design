const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let blogSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }
}, {
        collection: 'users'
    })

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;