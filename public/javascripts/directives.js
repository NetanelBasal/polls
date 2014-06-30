angular.module('pollDirectives', [])
    .directive('voteIcon', ['socket',
        function(socket) {
            return {
                restrict: 'A',
                link: function($scope, ele, attr) {
                    ele.click(function() {
                        var pollId = $scope.poll._id,
                            choiceId = attr.voteType;
                        if (choiceId) {
                            var voteObj = {
                                poll_id: pollId,
                                choice: choiceId
                            };
                            socket.emit('send:vote', voteObj);
                        }


                        if (attr.goodVal) {
                            $scope.numGoodVotes++;
                            var chart = $('.votes').highcharts();
                            chart.series[0].data[0].update({
                                y: ($scope.numGoodVotes / $scope.numGoodVotes) * 100
                            });
                            chart.series[0].data[1].update({
                                y: ($scope.numBadVotes / $scope.numBadVotes) * 100 || 0
                            });
                        } else {
                            $scope.numBadVotes++;
                            var chart = $('.votes').highcharts();
                            chart.series[0].data[0].update({
                                y: ($scope.numGoodVotes / $scope.numGoodVotes) * 100 || 0
                            });
                            chart.series[0].data[1].update({
                                y: ($scope.numBadVotes / $scope.numBadVotes) * 100
                            });
                        }
                    })
                }
            };
        }
    ]);