const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
    body: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    title:{
        type: mongoose.Schema.Types.String,
        required: true,
    },
    active: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Article', articleSchema)