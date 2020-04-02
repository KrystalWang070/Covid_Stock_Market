//https://community.plotly.com/t/add-labels-to-time-series-read-from-csv/11586
// USA plot
Plotly.d3.csv("../static/csv/usa_combined.csv", function(buf){ 
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
    width: 600,
    height: 300,
    yaxis: {
       tickformat: '.0', 
    xaxis: { title: "X-Axis" },
    yaxis: { title: "Y-Axis"}
    }
  };
  Plotly.newPlot('plot-us', data, layout);
  } );
// Korea plot
Plotly.d3.csv("../static/csv/korea_combined.csv", function(buf){ 
  var x_time1 = [], y_priceClose1 = [], y_covidKorea = [];
  for (var i = 0; i < buf.length; i++) {
    row = buf[i];
    x_time1.push( row['time'] );
    y_priceClose1.push( row['last'] );
    y_covidKorea.push( row['cases'] );
  }
  var traceKOSPI = {
    x: x_time1,
    y: y_priceClose1,
    mode: 'lines+markers',
    type: 'scatter',
    name: 'KOSPI Close Price'
  };
  var traceCovidKorea = {
    x: x_time1,
    y: y_covidKorea,
    mode: 'lines+markers',
    type: 'scatter',
    name: 'COVID-19 Reported Cases'
  };

  var data = [traceKOSPI, traceCovidKorea];
  var layout = {
    width: 600,
      height: 300,
    yaxis: {
       tickformat: '.0', 
    xaxis: { title: "X-Axis" },
    yaxis: { title: "Y-Axis"}
    }
  };
  Plotly.newPlot('plot-kr', data, layout);
});
// UK plot
Plotly.d3.csv("../static/csv/uk_combined.csv", function(buf){ 
    var x_time2 = [], y_priceClose2 = [], y_covidUK = [];
    for (var i = 0; i < buf.length; i++) {
      row = buf[i];
      x_time2.push( row['time'] );
      y_priceClose2.push( row['last'] );
      y_covidUK.push( row['cases'] );
    }
    var traceFTSE = {
      x: x_time2,
      y: y_priceClose2,
      mode: 'lines+markers',
      type: 'scatter',
      name: 'FTSE Close Price'
    };
    var traceCovidUK = {
      x: x_time2,
      y: y_covidUK,
      mode: 'lines+markers',
      type: 'scatter',
      name: 'COVID-19 Reported Cases'
    };
    var data = [traceFTSE, traceCovidUK];
    var layout = {
      width: 600,
      height: 300,
      yaxis: {
         tickformat: '.0', 
      xaxis: { title: "X-Axis" },
      yaxis: { title: "Y-Axis"}
      }
    };
    Plotly.newPlot('plot-uk', data, layout);
});

// Global Covid-19
Plotly.d3.csv("../static/csv/COVID-19-global.csv", function(buf){ 
  var x_date = [], y_cases = [];
  for (var i = 0; i < buf.length; i++) {
    row = buf[i];
    x_date.push( row['dateRep'] );
    y_cases.push( row['cases'] );
  }
  var traceCovid = {
    x: x_date,
    y: y_cases,
    type: 'bar',
    name: 'Covid-19 Cases'
  };

  var data = [traceCovid];
  var layout = {
    width: 600,
    height: 300,
    yaxis: {
       tickformat: '.0', 
    title: "Global Daily Cases",
    xaxis: { title: "X-Axis" },
    yaxis: { title: "Y-Axis"}
    }
  };
  Plotly.newPlot('plot-covid', data, layout);
});
// Covid by country
Plotly.d3.csv("../static/csv/COVID-19-global.csv", function(buf){ 
  var trace_usa= {
    x: x_time,
    y: y_covidUS,
    mode: 'lines+markers',
    type: 'scatter',
    name: 'KOSPI Close Price'
  };
  var trace_kr = {
    x: x_time1,
    y: y_covidKorea,
    mode: 'lines+markers',
    type: 'scatter',
    name: 'COVID-19 Reported Cases'
  };
  var trace_uk = {
    x: x_time2,
    y: y_covidUK,
    mode: 'lines+markers',
    type: 'scatter',
    name: 'COVID-19 Reported Cases'
  };
  var data = [trace_kr, trace_usa, trace_uk,];
    var layout = {
      width: 600,
      height: 300,
      yaxis: {
         tickformat: '.0', 
      title: "C",
      xaxis: { title: "X-Axis" },
      yaxis: { title: "Y-Axis"}
      }
    };
    Plotly.newPlot('plot-global', data, layout);
});