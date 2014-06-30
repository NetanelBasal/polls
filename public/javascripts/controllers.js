/**
 * PollsApp controllers
 */


// Managing the poll list
function PollListCtrl($scope, Poll) {
    $scope.polls = Poll.query(function(data) {
        $scope.allPolls = data;
        $scope.votedPolls = [];
        _(data).forEach(function(v, k) {
            if (v.userVote == true) {
                $scope.votedPolls.push(v);
            }
        });

        $scope.notvotedPolls = [];
        _(data).forEach(function(v, k) {
            if (v.userVote == false) {
                $scope.notvotedPolls.push(v);
            }
        });
        $scope.haveVoted = $scope.votedPolls.length;
        $scope.haveNotVoted = $scope.notvotedPolls.length;
    });




    $scope.filt = function() {
        if ($scope.filterResults == 'voted') {
            $scope.polls = [];
            $scope.polls = $scope.votedPolls;
        } else if ($scope.filterResults == 'notvoted') {
            $scope.polls = [];
            $scope.polls = $scope.notvotedPolls;
        } else {
            $scope.polls = [];
            $scope.polls = $scope.allPolls;
        }

    }

    $scope.isBad = function(c) {
        return c == 'bad';
    }

}
// Voting / viewing poll results
function PollItemCtrl($scope, $routeParams, socket, Poll, $http) {

    $http.get('/polls/' + $routeParams.pollId).then(function(res) {
        $scope.goodBad = function() {
            if ($scope.poll.userChoice != undefined) {
                return $scope.poll.userChoice.text == 'good';
            }
            return;
        }
        $scope.goodVoteId = res.data.choices[0]._id;
        $scope.badVoteId = res.data.choices[1]._id;

        $scope.poll = res.data;

        $scope.numGoodVotes = (res.data.choices[0].votes.length == 0) ? 0 : res.data.choices[0].votes.length;
        $scope.numBadVotes = (res.data.choices[1].votes.length == 0) ? 0 : res.data.choices[1].votes.length;


        $('.votes').highcharts({
            chart: {
                plotBackgroundColor: '#fff',
                plotBorderWidth: null,
                plotShadow: false
            },
            exporting: {
                enabled: false
            },
            credits: {
                text: null
            },
            title: {
                text: 'Votes',
                align: 'center',
                verticalAlign: 'middle',
                y: 50
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        formatter: function() {
                            return this.y + '% ' + this.point.name;
                        },
                        distance: -35,
                        style: {
                            fontWeight: 'bold',
                            fontSize: '11px',
                            color: '#3068b2'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%']
                }
            },
            series: [{
                type: 'pie',
                states: {
                    hover: {
                        enabled: false
                    }
                },
                innerSize: '60%',
                data: [{
                    name: 'good',
                    y: ($scope.numGoodVotes / $scope.numGoodVotes) * 100 || 0,
                    color: '#4dcc95',
                    dataLabels: {
                        enabled: true
                    }
                }, {
                    name: 'bad',
                    color: '#e57780',
                    y: ($scope.numBadvotes / $scope.numBadVotes) * 100 || 0,
                    dataLabels: {
                        enabled: true
                    }
                }]
            }]
        });
    });

    socket.on('myvote', function(data) {
        if (data._id === $routeParams.pollId) {
            $scope.poll = data;
        }
    });
    socket.on('vote', function(data) {
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