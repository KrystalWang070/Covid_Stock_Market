//https://community.plotly.com/t/add-labels-to-time-series-read-from-csv/11586
// USA plot
function buildPlot() {
  let d3;
  let Plotly;

    /* data route */
  const url = "/api/pals";
  d3.json(url).then(function(buf){ 
  var x_time = [], y_priceClose = [], y_covidUS = [];
  for (var i = 0; i < buf.length; i++) {
    row = buf[i];
    x_time.push( row['time'] );
    y_priceClose.push( row['last'] );
    y_covidUS.push( row['cases'] );
  }
  var traceDow = {
    x: x_time,
    y: y_priceClose,
    mode: 'lines+markers',
    type: 'scatter',
    name: 'Dow Jones Close Price'
  };
  var traceCovidUS = {
    x: x_time,
    y: y_covidUS,
    mode: 'lines+markers',
    type: 'scatter',
    name: 'COVID-19 Reported Cases'
  };
  var data = [traceDow, traceCovidUS];
  var layout = {
    yaxis: {
       tickformat: '.0', 
    title: "USA Covid-19 Cases & DOW Jones Close Price",
    xaxis: { title: "X-Axis" },
    yaxis: { title: "Y-Axis"}
    }
  };
  Plotly.newPlot('plot-us', data, layout);
  } );

}

buildPlot();