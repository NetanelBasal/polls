/**
 * Poll model
 */

var mongoose = require('mongoose');

var voteSchema = new mongoose.Schema({
    ip: 'String'
});
var choiceSchema = new mongoose.Schema({
    text: String,
    votes: [voteSchema]
});
exports.PollSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    privatePoll: {
        type: Boolean
    },
    userChoice: {
        type: String
    },
    userVote: {
        type: Boolean,
        default: false
    },
    choices: [choiceSchema]
});