// Create a map object
var myMap = L.map("map", {
    //focus on lat/long and zoom to show all three countries
    center: [44.27, 19.89],
    zoom: 3,
});

var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
}).addTo(myMap);

// Define a baseMaps object to hold our base layers
var baseMaps = {
    "Dark Map": darkmap,
    "Street Map": streetmap
};

// Create a layer control
L.control.layers(baseMaps).addTo(myMap);

// Each country object contains the country's name, location, cases, market name, and financial performance
var countries = [
    {
      name: "United States of America",
      location: [37.09, -95.71],
      cases: 8789,
      market_name: "Dow Jones",
      loss_last_month: (27081.36 - 21200.55) / 21200.55
    },
    {
      name: "United Kingdom",
      location: [51.5, -0.13],
      cases: 1427,
      market_name: "FTSE",
      loss_last_month: (6894.5 - 5594.5) / 5594.5
    },
    {
      name: "South Korea",
      location: [37.56, 126.98],
      cases: 100,
      market_name: "KOSPI",
      loss_last_month: (2103.64 - 1704.76) / 1704.76
    }
];

// Loop through the cities array and create one marker for each city object
for (var i = 0; i < countries.length; i++) {

    // Conditionals for countries financial performance
    var color = "";
    if (countries[i].loss_last_month > 0.25) {
      color = "red";
    }
    else if (countries[i].loss_last_month > 0.10) {
      color = "yellow";
    }
    else {
      color = "green";
    }
  
    // Add circles to map
    L.circle(countries[i].location, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: color,
      // Adjust radius
      radius: countries[i].cases * 200,
      // Make percent
    }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h2>Cases: " + countries[i].cases + "</h2> <hr> <h3>" + 
        countries[i].market_name + " Loss in Last Month: " + Math.round(countries[i].loss_last_month * 100) + "%" + "</h3>").addTo(myMap);
}