var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuestionSchema = new mongoose.Schema({
    question: {type: String, required: true, minlength: 10},
    description: {type: String},
    answers: [{type: Schema.Types.ObjectId, ref:'Answer'}]
}, {timestamps: true});
var Question = mongoose.model('Question', QuestionSchema);

