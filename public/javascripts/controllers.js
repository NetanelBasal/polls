/**
 * PollsApp controllers
 */


// Managing the poll list
function PollListCtrl($scope, Poll) {
    $scope.polls = Poll.query();
}
// Voting / viewing poll results
function PollItemCtrl($scope, $routeParams, socket, Poll, $http) {

    socket.on('myvote', function(data) {
        console.dir(data);
        if (data._id === $routeParams.pollId) {
            $scope.poll = data;
        }
    });
    socket.on('vote', function(data) {
        console.dir(data);
        if (data._id === $routeParams.pollId) {
            $scope.poll.choices = data.choices;
            $scope.poll.totalVotes = data.totalVotes;
        }

    });
    $scope.vote = function() {
        var pollId = $scope.poll._id,
            choiceId = $scope.poll.userVote;
        if (choiceId) {
            var voteObj = {
                poll_id: pollId,
                choice: choiceId
            };
            socket.emit('send:vote', voteObj);
        }
    };
}


// Creating a new poll
function PollNewCtrl($scope, $location, Poll) {

    $scope.poll = {
        question: '',
        privatePoll: false,
        choices: [{
            text: 'good'
        }, {
            text: 'bad'
        }]
    };

    $scope.createPoll = function() {
        var poll = $scope.poll;
        if (poll.question.length > 0) {
            var newPoll = new Poll(poll);
            newPoll.$save(function(p, resp) {
                if (!p.error) {
                    $scope.link = p._id;
                }
            });
        } else {
            $scope.minLen = true;
        }
    };
}