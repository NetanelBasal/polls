/*
 * GET home page.
 */

/*exports.index = function(req, res){
  res.render('index', { title: 'Polls' });
};*/

var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'pollsapp');
var PollSchema = require('../models/Poll.js').PollSchema;
var Poll = db.model('polls', PollSchema);
var _ = require('lodash-node');

exports.index = function(req, res) {
    res.render('index', {
        title: 'Polls'
    });
};
// JSON API for list of polls
exports.list = function(req, res) {
    Poll.find({
        privatePoll: false
    }, 'question', function(error, polls) {
        res.json(polls);
    });
};
// JSON API for getting a single poll
exports.poll = function(req, res) {
    var pollId = req.params.id;
    Poll.findById(pollId, '', {
        lean: true
    }, function(err, poll) {
        if (poll) {
            var userVoted = false,
                userChoice,
                totalVotes = 0;
            for (c in poll.choices) {
                var choice = poll.choices[c];
                for (v in choice.votes) {
                    var vote = choice.votes[v];
                    totalVotes++;
                    if (vote.ip === (req.header('x-forwarded-for') || req.ip)) {
                        userVoted = true;
                        userChoice = {
                            _id: choice._id,
                            text: choice.text
                        };
                    }
                }
            }
            poll.userVoted = userVoted;
            poll.userChoice = userChoice;
            poll.totalVotes = totalVotes;
            res.json(poll);
        } else {
            res.json({
                error: true
            });
        }
    });


};
// JSON API for creating a new poll
exports.create = function(req, res) {

    pollObj = {
        question: req.body.question,
        choices: JSON.parse(req.body.choices),
        privatePoll: req.body.privatePoll
    };

    new Poll(pollObj).save(function(err, poll) {
        var id = poll._id;
        if (!_.isEmpty(req.files)) {
            fs.readFile(req.files.file0.path, function(err, data) {
                var newPath = __dirname + "/../public/img/polls/" + id + ".jpg";
                fs.writeFile(newPath, data, function(err) {
                    res.json(poll);
                });
            });
        } else {
            res.json(poll);
        }

    });


};

// Socket API for saving a vote
exports.vote = function(socket) {
    socket.on('send:vote', function(data) {
        var ip = socket.handshake.headers['x-forwarded-for'] ||
            socket.handshake.address.address;
        Poll.findById(data.poll_id, function(err, poll) {
            console.log(poll);
            var choice = poll.choices.id(data.choice);
            choice.votes.push({
                ip: ip
            });
            poll.save(function(err, doc) {
                var theDoc = {
                    question: doc.question,
                    _id: doc._id,
                    choices: doc.choices,
                    userVoted: false,
                    totalVotes: 0
                };
                for (var i = 0, ln = doc.choices.length; i < ln; i++) {
                    var choice = doc.choices[i];
                    for (var j = 0, jLn = choice.votes.length; j < jLn; j++) {
                        var vote = choice.votes[j];
                        theDoc.totalVotes++;
                        theDoc.ip = ip;
                        if (vote.ip === ip) {
                            theDoc.userVoted = true;
                            theDoc.userChoice = {
                                _id: choice._id,
                                text: choice.text
                            };
                        }
                    }
                }
                socket.emit('myvote', theDoc);
                socket.broadcast.emit('vote', theDoc);
            });
        });
    });
};