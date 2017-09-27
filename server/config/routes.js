var questions = require('../controllers/questions.js');
const path = require('path'); 
module.exports = function(app) {
    app.post('/api/questions', questions.addQuestion);
    app.get('/api/questions', questions.getAll);
    app.get('/api/questions/:id', questions.findOne);
    app.put('/api/questions/:id', questions.addAnswer);
    app.put('/api/answers/:id', questions.updateAnswer);
    app.get('/api/answers/:id', questions.findAnswer);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}