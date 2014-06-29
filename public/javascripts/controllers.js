/**
 * PollsApp controllers
 */


// Managing the poll list
function PollListCtrl($scope, Poll) {
    $scope.polls = Poll.query(function(d) {
        console.log(d);
    });

}
// Voting / viewing poll results
function PollItemCtrl($scope, $routeParams, socket, Poll) {

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
function PollNewCtrl($scope, $location, Poll, $upload) {

    $scope.poll = {
        question: '',
        privatePoll: false,
        choices: [{
            text: 'good'
        }, {
            text: 'bad'
        }]
    };

    $scope.file = [];
    $scope.onFileSelect = function($files) {
        for (var i = 0; i < $files.length; i++) {
            $scope.file.push($files[i]);
        }
    }

    $scope.createPoll = function() {
        $scope.minLen = false;
        if ($scope.poll.pollType == true) {
            $scope.poll.privatePoll = true;
        }
        if ($scope.poll.question.length > 0) {
            $scope.upload = $upload.upload({
                url: '/polls',
                data: $scope.poll,
                file: $scope.file,
            }).progress(function(evt) {
                if ($scope.file.length >= 1) {
                    $scope.loader = parseInt(100.0 * evt.loaded / evt.total) + '%';
                }
            }).success(function(data) {
                $scope.link = data._id;
            });
        } else {
            $scope.minLen = true;
        }
    };


}