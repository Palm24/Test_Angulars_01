
var mongoose = require( 'mongoose' );

var FeedbackSchema = mongoose.Schema({
    email: {type: String, required: true},
    name: {type: String, require: true},
    // feedback: String
    feedback: {type: String, required: true}
})

var FeedbackModel = mongoose.model('feedbacks', FeedbackSchema)
module.exports = FeedbackModel;