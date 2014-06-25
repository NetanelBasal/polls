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

                        var gaugeOptions = {
                            chart: {
                                type: 'solidgauge',
                                backgroundColor: '#E6E6E6'
                            },
                            title: null,
                            pane: {
                                center: ['50%', '85%'],
                                size: '140%',
                                startAngle: -90,
                                endAngle: 90,
                                background: {
                                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                                    innerRadius: '60%',
                                    outerRadius: '100%',
                                    shape: 'arc'
                                }
                            },

                            tooltip: {
                                enabled: false
                            },
                            yAxis: {
                                stops: [
                                    [1, 'rgb(0, 184, 0)']
                                ],
                                lineWidth: 0,
                                minorTickInterval: null,
                                tickPixelInterval: 400,
                                tickWidth: 0,
                                title: {
                                    y: -70
                                },
                                labels: {
                                    y: 16
                                }
                            },
                            plotOptions: {
                                solidgauge: {
                                    dataLabels: {
                                        y: 5,
                                        borderWidth: 0,
                                        useHTML: true
                                    }
                                }
                            }
                        };

                        $('.good').highcharts(Highcharts.merge(gaugeOptions, {
                            yAxis: {
                                min: 0,
                                max: 100,
                                title: {
                                    text: 'good',
                                    style: {
                                        color: 'rgb(0, 184, 0)',
                                        fontSize: '20px'
                                    }
                                },
                            },
                            credits: {
                                enabled: false
                            },
                            series: [{
                                name: 'Votes',
                                data: [res.data.choices[0].votes.length],
                                dataLabels: {
                                    format: '<div style="text-align:center"><span style="font-size:25px;color:rgb(0, 184, 0)">{y}</span><br/>' +
                                        '<span style="font-size:16px;color:#0C3D5E">Votes</span></div>'
                                },
                                tooltip: {
                                    valueSuffix: null
                                }
                            }]

                        }));

                        /* Bad Pay */
                        $('.bad').highcharts(Highcharts.merge(gaugeOptions, {
                            yAxis: {
                                stops: [
                                    [1, 'rgb(252, 76, 76)']
                                ],
                                min: 0,
                                max: 100,
                                title: {
                                    text: 'bad',
                                    style: {
                                        color: 'rgb(252, 76, 76)',
                                        fontSize: '20px'
                                    }
                                },
                            },
                            credits: {
                                enabled: false
                            },
                            series: [{
                                name: 'Votes',
                                data: [res.data.choices[1].votes.length],
                                dataLabels: {
                                    format: '<div style="text-align:center"><span style="font-size:25px;color:rgb(252, 76, 76)">{y}</span><br/>' +
                                        '<span style="font-size:16px;color:#0C3D5E">Votes</span></div>'
                                },
                                tooltip: {
                                    valueSuffix: null
                                }
                            }]
                        }));
                    })
                }
            };
        }
    ]);