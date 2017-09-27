var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AnswerSchema = new mongoose.Schema({
    response: {type: String, required: true, minlength: 5},
    support: {type: String, required: false},
    likes: {type: Number, required: false},
    _question: [{type: Schema.Types.ObjectId, ref:'Question'}]
}, {timestamps: true});
var Answer = mongoose.model('Answer', AnswerSchema);