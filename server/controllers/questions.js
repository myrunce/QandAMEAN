var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer')
module.exports = {
    getAll: function(req, res) {
        Question.find({}).exec(function(err, questions) {
            return res.json(questions);
        })
    },
    addQuestion: function(req, res) {
        var question = new Question({
            question: req.body.question,
            description: req.body.description,
        })
        question.save(function(err) {
            if (err) {
                console.log(err);
            }
            else {
                return res.json(question)
            }
        })
    },
    addAnswer: function(req, res) {
        Question.findOne({_id:req.params.id}, function(err, question) {
            console.log(question);
            var answer = new Answer({
                response: req.body.response,
                support: req.body.support,
                likes: 0,
                _question: question._id
            })
            console.log(answer);
            answer.save(function(err) {
                console.log(question)
                question.answers.push(answer);
                question.save(function(err) {
                    if(err) {
                        console.log('ERROR SAVING ANSWER TO QUESTION');
                    }
                    else {
                        console.log('SAVING ANSWER')
                        return res.json(question);
                    }
                })
            })
        })
    },
    findOne: function(req, res) {
        Question.findOne({_id: req.params.id})
        .populate('answers')
        .exec(function(err, question) {
            if (err) {
                console.log('ERROR FINDING QUESTION');
            }
            else {
                return res.json(question);
            }
        })
    },
    updateAnswer: (function(req, res) {
        Answer.update({_id: req.params.id}, {likes: req.body.likes}, function(err, values) {
            if (!err) {
                Answer.findOne({_id: req.params.id}).exec(function(err, answer) {
                    return res.json(answer);
                })
            } else {
                console.log(err);
            }
        });
    }),
    findAnswer: function(req,res) {
        Answer.find({_id: req.params.id}, function(err, answer) {
            if (err) {
                console.log('COULD NOT FIND ANSWER');
            }
            else {
                console.log('FOUND ANSWER')
                return res.json(answer)
            }
        })
    }
}