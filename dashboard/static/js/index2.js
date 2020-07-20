
function makeChart_Socal(players) {

    var countyLabels = players.map(function(d) {
        return d.county;
    });
    var totalcountconfirmedData = players.map(function(d) {
        return +d.totalcountconfirmed;
    });

    var dateData = players.map(function(d) {
        return +d.totalcountdeaths;
    });

    var chart = new Chart('chart_Socal', {
        type: "line",
        options: {
            maintainAspectRatio: false,
            legend: {
                display: true
            }
        },
        data: {
            labels: countyLabels,
            datasets: [

                {
                    label: 'totalcountconfirmed',
                    backgroundColor: 'rgba(247, 163, 91, 1)',
                    borderColor:  'rgba(247, 163, 91, 1)',
                    borderWidth: 1,
                    data: totalcountconfirmedData,

                },
                {
                    label: 'totalcountdeaths',
                    backgroundColor: 'rgba(144, 238, 125, 1)',
                    borderColor: 'rgba(144, 238, 125, 1)',
                    borderWidth: 1,
                    data: dateData,

                }
            ]
        }
    });
}

// Request data using D3
d3
    .csv("southerncaliforniacounty.csv").then(function(data) {
    makeChart_Socal(data);
});

function makeChart(players) {

    var cityLabels = players.map(function(d) {
        return d.city;
    });
    var totalcountconfirmedData = players.map(function(d) {
        return +d.totalcountconfirmed;
    });

    var totalcountdeathsData = players.map(function(d) {
        return +d.totalcountdeaths;
    });

    var chart = new Chart('chart', {
        type: "line",
        options: {
            maintainAspectRatio: false,
            legend: {
                display: true
            }
        },
        data: {
            labels: cityLabels,
            datasets: [

                {
                    label: 'totalcountconfirmed',
                    backgroundColor: 'rgba(247, 163, 91, 1)',
                    borderColor:  'rgba(247, 163, 91, 1)',
                    borderWidth: 1,
                    data: totalcountconfirmedData,

                },
                {
                    label: 'totalcountdeaths',
                    backgroundColor: 'rgba(144, 238, 125, 1)',
                    borderColor: 'rgba(144, 238, 125, 1)',
                    borderWidth: 1,
                    data: totalcountdeathsData,

                }
            ]
        }
    });
}

// Request data using D3
d3
    .csv("orange.csv").then(function(data) {
        makeChart(data);
});


function makeChart_two(players) {

    var cityLabels = players.map(function(d) {
        return d.city;
    });
    var totalcountconfirmedData = players.map(function(d) {
        return +d.totalcountconfirmed;
    });

    var totalcountdeathsData = players.map(function(d) {
        return +d.totalcountdeaths;
    });

    var chart = new Chart('chart_two', {
        type: "line",
        options: {
            maintainAspectRatio: false,
            legend: {
                display: true
            }
        },
        data: {
            labels: cityLabels,
            datasets: [

                {
                    label: 'totalcountconfirmed',
                    backgroundColor: 'rgba(247, 163, 91, 1)',
                    borderColor:  'rgba(247, 163, 91, 1)',
                    borderWidth: 1,
                    data: totalcountconfirmedData,

                },
                {
                    label: 'totalcountdeaths',
                    backgroundColor: 'rgba(144, 238, 125, 1)',
                    borderColor: 'rgba(144, 238, 125, 1)',
                    borderWidth: 1,
                    data: totalcountdeathsData,

                }
            ]
        }
    });
}

// Request data using D3
d3
    .csv("losangeles.csv").then(function(data) {
        makeChart_two(data);
});

function makeChart_three(players) {

    var cityLabels = players.map(function(d) {
        return d.city;
    });
    var totalcountconfirmedData = players.map(function(d) {
        return +d.totalcountconfirmed;
    });

    var totalcountdeathsData = players.map(function(d) {
        return +d.totalcountdeaths;
    });

    var chart = new Chart('chart_three', {
        type: "line",
        options: {
            maintainAspectRatio: false,
            legend: {
                display: true
            }
        },
        data: {
            labels: cityLabels,
            datasets: [

                {
                    label: 'totalcountconfirmed',
                    backgroundColor: 'rgba(247, 163, 91, 1)',
                    borderColor:  'rgba(247, 163, 91, 1)',
                    borderWidth: 1,
                    data: totalcountconfirmedData,

                },
                {
                    label: 'totalcountdeaths',
                    backgroundColor: 'rgba(144, 238, 125, 1)',
                    borderColor: 'rgba(144, 238, 125, 1)',
                    borderWidth: 1,
                    data: totalcountdeathsData,

                }
            ]
        }
    });
}

// Request data using D3
d3
    .csv("riverside.csv").then(function(data) {
        makeChart_three(data);
});

function makeChart_four(players) {

    var cityLabels = players.map(function(d) {
        return d.city;
    });
    var totalcountconfirmedData = players.map(function(d) {
        return +d.totalcountconfirmed;
    });

    var totalcountdeathsData = players.map(function(d) {
        return +d.totalcountdeaths;
    });

    var chart = new Chart('chart_four', {
        type: "line",
        options: {
            maintainAspectRatio: false,
            legend: {
                display: true
            }
        },
        data: {
            labels: cityLabels,
            datasets: [

                {
                    label: 'totalcountconfirmed',
                    backgroundColor: 'rgba(247, 163, 91, 1)',
                    borderColor:  'rgba(247, 163, 91, 1)',
                    borderWidth: 1,
                    data: totalcountconfirmedData,

                },
                {
                    label: 'totalcountdeaths',
                    backgroundColor: 'rgba(144, 238, 125, 1)',
                    borderColor: 'rgba(144, 238, 125, 1)',
                    borderWidth: 1,
                    data: totalcountdeathsData,

                }
            ]
        }
    });
}

// Request data using D3
d3
    .csv("sanbernandino.csv").then(function(data) {
        makeChart_four(data);
});

function makeChart_five(players) {

    var cityLabels = players.map(function(d) {
        return d.city;
    });
    var totalcountconfirmedData = players.map(function(d) {
        return +d.totalcountconfirmed;
    });

    var totalcountdeathsData = players.map(function(d) {
        return +d.totalcountdeaths;
    });

    var chart = new Chart('chart_five', {
        type: "line",
        options: {
            maintainAspectRatio: true,
            legend: {
                display: true
            }
        },
        data: {
            labels: cityLabels,
            datasets: [

                {
                    label: 'totalcountconfirmed',
                    backgroundColor: 'rgba(247, 163, 91, 1)',
                    borderColor:  'rgba(247, 163, 91, 1)',
                    borderWidth: 1,
                    data: totalcountconfirmedData,

                },
                {
                    label: 'totalcountdeaths',
                    backgroundColor: 'rgba(144, 238, 125, 1)',
                    borderColor: 'rgba(144, 238, 125, 1)',
                    borderWidth: 1,
                    data: totalcountdeathsData,

                }
            ]
        }
    });
}

// Request data using D3
d3
    .csv("santabarbara.csv").then(function(data) {
        makeChart_five(data);
});