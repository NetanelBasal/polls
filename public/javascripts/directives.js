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
                            var chart = $('.good').highcharts()
                        } else {
                            var chart = $('.bad').highcharts()
                        }

                        if (chart) {
                            var point = chart.series[0].points[0],
                                newVal,
                                newVal = point.y + 1;
                            point.update(newVal);
                        }
                    })
                }
            };
        }
    ])
    .directive('showPoll', ['$http', '$routeParams',

        function($http, $routeParams) {
            return {
                restrict: 'A',
                link: function($scope, iElement, iAttrs) {
                    $http.get('/polls/' + $routeParams.pollId).then(function(res) {
                        $scope.goodBad = function() {
                            if ($scope.poll.userChoice != undefined) {
                                return $scope.poll.userChoice.text == 'good';
                            }
                            return
                        }
                        $scope.goodVoteId = res.data.choices[0]._id;
                        $scope.badVoteId = res.data.choices[1]._id;

                        $scope.poll = res.data;
                        console.log($scope.poll);


                        $('.good').highcharts({
                            chart: {
                                plotBackgroundColor: null,
                                plotBorderWidth: 0,
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
                                        distance: -50,
                                        style: {
                                            fontWeight: 'bold',
                                            fontSize: '13px',
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
                                innerSize: '50%',
                                data: [{
                                    name: 'good',
                                    y: res.data.choices[0].votes.length,
                                    color: '#4dcc95',
                                    dataLabels: {
                                        enabled: true
                                    }
                                }, {
                                    name: 'bad',
                                    color: '#e57780',
                                    y: res.data.choices[1].votes.length,
                                    dataLabels: {
                                        enabled: true
                                    }
                                }]
                            }]

                        });

                    })
                }
            };
        }
    ]);