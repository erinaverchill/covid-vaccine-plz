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
        type: "horizontalBar",
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

    var map = L.map('map');

    var drawMap = function(){

        map.setView([31.75, 110], 4);
        mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',
                maxZoom: 15,
            }).addTo(map);

        //HeatMap
        var geoData = [];
        _.each(allDim.top(Infinity), function (d) {
            geoData.push([d["latitude"], d["longitude"], 1]);
          });
        var heat = L.heatLayer(geoData,{
            radius: 10,
            blur: 20, 
            maxZoom: 1,
        }).addTo(map);

    };

    //Draw Map
    drawMap();
}

// Request data using D3
d3
    .csv("citywide.csv").then(function(data) {
        makeChart(data);
});



function makeChart_two(players) {

    var countyLabels = players.map(function(d) {
        return d.county;
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
            maintainAspectRatio: true,
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
                    data: totalcountdeathsData,

                }
            ]
        }
    });
}

// Request data using D3
d3
    .csv("statewide.csv").then(function(data) {
    makeChart_two(data);
});
