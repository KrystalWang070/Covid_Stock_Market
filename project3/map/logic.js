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

// Create a legend to display information about our map
var info = L.control({position: 
  "bottomright"
});

// When the layer control is added, insert a div with the class of "legend"
info.onAdd = function() {
  var div = L.DomUtil.create("div", "legend");
  return div;
};
// Add the info legend to the map
info.addTo(myMap);

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

// Loop through the focus countries array and create one marker for each country object
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

var extra_countries = [
  {
    country: "Afghanistan",
    lat: 33.93911,
    lng: 67.709953,
    total: 166,
    location: "33.93911, 67.709953"
  },
  {
    "country": "Albania",
    "lat": 41.153332,
    "lng": 20.168331,
    "total": 243,
    "location": "41.153332, 20.168331"
  },
  {
    "country": "Algeria",
    "lat": 28.033886,
    "lng": 1.659626,
    "total": 584,
    "location": "28.033886, 1.659626"
  },
  {
    "country": "Andorra",
    "lat": 42.546245,
    "lng": 1.601554,
    "total": 376,
    "location": "42.546245, 1.601554"
  },
  {
    "country": "Angola",
    "lat": -11.202692,
    "lng": 17.873887,
    "total": 7,
    "location": "-11.202692, 17.873887"
  },
  {
    "country": "Anguilla",
    "lat": 18.220554,
    "lng": -63.068615,
    "total": 2,
    "location": "18.220554, -63.068615"
  },
  {
    "country": "Antigua_and_Barbuda",
    "lat": 17.060816,
    "lng": -61.796428,
    "total": 7,
    "location": "17.060816, -61.796428"
  },
  {
    "country": "Argentina",
    "lat": -38.416097,
    "lng": -63.616672,
    "total": 966,
    "location": "-38.416097, -63.616672"
  },
  {
    "country": "Armenia",
    "lat": 40.069099,
    "lng": 45.038189,
    "total": 532,
    "location": "40.069099, 45.038189"
  },
  {
    "country": "Aruba",
    "lat": 12.52111,
    "lng": -69.968338,
    "total": 55,
    "location": "12.52111, -69.968338"
  },
  {
    "country": "Australia",
    "lat": -25.274398,
    "lng": 133.775136,
    "total": 4707,
    "location": "-25.274398, 133.775136"
  },
  {
    "country": "Austria",
    "lat": 47.516231,
    "lng": 14.550072,
    "total": 10182,
    "location": "47.516231, 14.550072"
  },
  {
    "country": "Azerbaijan",
    "lat": 40.143105,
    "lng": 47.576927,
    "total": 298,
    "location": "40.143105, 47.576927"
  },
  {
    "country": "Bahamas",
    "lat": 25.03428,
    "lng": -77.39628,
    "total": 15,
    "location": "25.03428, -77.39628"
  },
  {
    "country": "Bahrain",
    "lat": 25.930414,
    "lng": 50.637772,
    "total": 567,
    "location": "25.930414, 50.637772"
  },
  {
    "country": "Bangladesh",
    "lat": 23.684994,
    "lng": 90.356331,
    "total": 51,
    "location": "23.684994, 90.356331"
  },
  {
    "country": "Barbados",
    "lat": 13.193887,
    "lng": -59.543198,
    "total": 34,
    "location": "13.193887, -59.543198"
  },
  {
    "country": "Belarus",
    "lat": 53.709807,
    "lng": 27.953389,
    "total": 152,
    "location": "53.709807, 27.953389"
  },
  {
    "country": "Belgium",
    "lat": 50.503887,
    "lng": 4.469936,
    "total": 12775,
    "location": "50.503887, 4.469936"
  },
  {
    "country": "Belize",
    "lat": 17.189877,
    "lng": -88.49765,
    "total": 3,
    "location": "17.189877, -88.49765"
  },
  {
    "country": "Benin",
    "lat": 9.30769,
    "lng": 2.315834,
    "total": 8,
    "location": "9.30769, 2.315834"
  },
  {
    "country": "Bermuda",
    "lat": 32.321384,
    "lng": -64.75737,
    "total": 32,
    "location": "32.321384, -64.75737"
  },
  {
    "country": "Bhutan",
    "lat": 27.514162,
    "lng": 90.433601,
    "total": 4,
    "location": "27.514162, 90.433601"
  },
  {
    "country": "Bolivia",
    "lat": -16.290154,
    "lng": -63.588653,
    "total": 115,
    "location": "-16.290154, -63.588653"
  },
  {
    "country": "Bosnia_and_Herzegovina",
    "lat": 43.915886,
    "lng": 17.679076,
    "total": 413,
    "location": "43.915886, 17.679076"
  },
  {
    "country": "Botswana",
    "lat": -22.328474,
    "lng": 24.684866,
    "total": 3,
    "location": "-22.328474, 24.684866"
  },
  {
    "country": "Brazil",
    "lat": -14.235004,
    "lng": -51.92528,
    "total": 5717,
    "location": "-14.235004, -51.92528"
  },
  {
    "country": "British_Virgin_Islands",
    "lat": 18.420695,
    "lng": -64.639968,
    "total": 3,
    "location": "18.420695, -64.639968"
  },
  {
    "country": "Brunei_Darussalam",
    "lat": 4.535277,
    "lng": 114.727669,
    "total": 129,
    "location": "4.535277, 114.727669"
  },
  {
    "country": "Bulgaria",
    "lat": 42.733883,
    "lng": 25.48583,
    "total": 399,
    "location": "42.733883, 25.48583"
  },
  {
    "country": "Burkina_Faso",
    "lat": 12.238333,
    "lng": -1.561593,
    "total": 246,
    "location": "12.238333, -1.561593"
  },
  {
    "country": "Burundi",
    "lat": -3.373056,
    "lng": 29.918886,
    "total": 2,
    "location": "-3.373056, 29.918886"
  },
  {
    "country": "Cambodia",
    "lat": 12.565679,
    "lng": 104.990963,
    "total": 109,
    "location": "12.565679, 104.990963"
  },
  {
    "country": "Cameroon",
    "lat": 7.369722,
    "lng": 12.354722,
    "total": 193,
    "location": "7.369722, 12.354722"
  },
  {
    "country": "Canada",
    "lat": 56.130366,
    "lng": -106.346771,
    "total": 8536,
    "location": "56.130366, -106.346771"
  },
  {
    "country": "Cape_Verde",
    "lat": 16.002082,
    "lng": -24.013197,
    "total": 6,
    "location": "16.002082, -24.013197"
  },
  {
    "country": "Cayman_Islands",
    "lat": 19.513469,
    "lng": -80.566956,
    "total": 14,
    "location": "19.513469, -80.566956"
  },
  {
    "country": "Central_African_Republic",
    "lat": 6.611111,
    "lng": 20.939444,
    "total": 6,
    "location": "6.611111, 20.939444"
  },
  {
    "country": "Chad",
    "lat": 15.454166,
    "lng": 18.732207,
    "total": 7,
    "location": "15.454166, 18.732207"
  },
  {
    "country": "Chile",
    "lat": -35.675147,
    "lng": -71.542969,
    "total": 2738,
    "location": "-35.675147, -71.542969"
  },
  {
    "country": "China",
    "lat": 35.86166,
    "lng": 104.195397,
    "total": 82295,
    "location": "35.86166, 104.195397"
  },
  {
    "country": "Colombia",
    "lat": 4.570868,
    "lng": -74.297333,
    "total": 906,
    "location": "4.570868, -74.297333"
  },
  {
    "country": "Congo",
    "lat": -0.228021,
    "lng": 15.827659,
    "total": 22,
    "location": "-0.228021, 15.827659"
  },
  {
    "country": "Costa_Rica",
    "lat": 9.748917,
    "lng": -83.753428,
    "total": 347,
    "location": "9.748917, -83.753428"
  },
  {
    "country": "Cote_dIvoire",
    "lat": 7.539989,
    "lng": -5.54708,
    "total": 168,
    "location": "7.539989, -5.54708"
  },
  {
    "country": "Croatia",
    "lat": 45.1,
    "lng": 15.2,
    "total": 867,
    "location": "45.1, 15.2"
  },
  {
    "country": "Cuba",
    "lat": 21.521757,
    "lng": -77.781167,
    "total": 186,
    "location": "21.521757, -77.781167"
  },
  {
    "country": "Cyprus",
    "lat": 35.126413,
    "lng": 33.429859,
    "total": 262,
    "location": "35.126413, 33.429859"
  },
  {
    "country": "Czech_Republic",
    "lat": 49.817492,
    "lng": 15.472962,
    "total": 3308,
    "location": "49.817492, 15.472962"
  },
  {
    "country": "Democratic_Republic_of_the_Congo",
    "lat": -4.038333,
    "lng": 21.758664,
    "total": 98,
    "location": "-4.038333, 21.758664"
  },
  {
    "country": "Denmark",
    "lat": 56.26392,
    "lng": 9.501785,
    "total": 2860,
    "location": "56.26392, 9.501785"
  },
  {
    "country": "Djibouti",
    "lat": 11.825138,
    "lng": 42.590275,
    "total": 31,
    "location": "11.825138, 42.590275"
  },
  {
    "country": "Dominica",
    "lat": 15.414999,
    "lng": -61.370976,
    "total": 11,
    "location": "15.414999, -61.370976"
  },
  {
    "country": "Dominican_Republic",
    "lat": 18.735693,
    "lng": -70.162651,
    "total": 1109,
    "location": "18.735693, -70.162651"
  },
  {
    "country": "Ecuador",
    "lat": -1.831239,
    "lng": -78.183406,
    "total": 2302,
    "location": "-1.831239, -78.183406"
  },
  {
    "country": "Egypt",
    "lat": 26.820553,
    "lng": 30.802498,
    "total": 656,
    "location": "26.820553, 30.802498"
  },
  {
    "country": "El_Salvador",
    "lat": 13.794185,
    "lng": -88.89653,
    "total": 32,
    "location": "13.794185, -88.89653"
  },
  {
    "country": "Equatorial_Guinea",
    "lat": 1.650801,
    "lng": 10.267895,
    "total": 15,
    "location": "1.650801, 10.267895"
  },
  {
    "country": "Eritrea",
    "lat": 15.179384,
    "lng": 39.782334,
    "total": 15,
    "location": "15.179384, 39.782334"
  },
  {
    "country": "Estonia",
    "lat": 58.595272,
    "lng": 25.013607,
    "total": 745,
    "location": "58.595272, 25.013607"
  },
  {
    "country": "Eswatini",
    "lat": -26.522503,
    "lng": 31.465866,
    "total": 9,
    "location": "-26.522503, 31.465866"
  },
  {
    "country": "Ethiopia",
    "lat": 9.145,
    "lng": 40.489673,
    "total": 25,
    "location": "9.145, 40.489673"
  },
  {
    "country": "Faroe_Islands",
    "lat": 61.892635,
    "lng": -6.911806,
    "total": 169,
    "location": "61.892635, -6.911806"
  },
  {
    "country": "Fiji",
    "lat": -16.578193,
    "lng": 179.414413,
    "total": 5,
    "location": "-16.578193, 179.414413"
  },
  {
    "country": "Finland",
    "lat": 61.92411,
    "lng": 25.748151,
    "total": 1384,
    "location": "61.92411, 25.748151"
  },
  {
    "country": "France",
    "lat": 46.227638,
    "lng": 2.213749,
    "total": 52128,
    "location": "46.227638, 2.213749"
  },
  {
    "country": "French_Polynesia",
    "lat": -17.679742,
    "lng": -149.406843,
    "total": 37,
    "location": "-17.679742, -149.406843"
  },
  {
    "country": "Gabon",
    "lat": -0.803689,
    "lng": 11.609444,
    "total": 16,
    "location": "-0.803689, 11.609444"
  },
  {
    "country": "Gambia",
    "lat": 13.443182,
    "lng": -15.310139,
    "total": 4,
    "location": "13.443182, -15.310139"
  },
  {
    "country": "Georgia",
    "lat": 42.315407,
    "lng": 43.356892,
    "total": 110,
    "location": "42.315407, 43.356892"
  },
  {
    "country": "Germany",
    "lat": 51.165691,
    "lng": 10.451526,
    "total": 67366,
    "location": "51.165691, 10.451526"
  },
  {
    "country": "Ghana",
    "lat": 7.946527,
    "lng": -1.023194,
    "total": 152,
    "location": "7.946527, -1.023194"
  },
  {
    "country": "Gibraltar",
    "lat": 36.137741,
    "lng": -5.345374,
    "total": 69,
    "location": "36.137741, -5.345374"
  },
  {
    "country": "Greece",
    "lat": 39.074208,
    "lng": 21.824312,
    "total": 1314,
    "location": "39.074208, 21.824312"
  },
  {
    "country": "Greenland",
    "lat": 71.706936,
    "lng": -42.604303,
    "total": 10,
    "location": "71.706936, -42.604303"
  },
  {
    "country": "Grenada",
    "lat": 12.262776,
    "lng": -61.604171,
    "total": 9,
    "location": "12.262776, -61.604171"
  },
  {
    "country": "Guam",
    "lat": 13.444304,
    "lng": 144.793731,
    "total": 69,
    "location": "13.444304, 144.793731"
  },
  {
    "country": "Guatemala",
    "lat": 15.783471,
    "lng": -90.230759,
    "total": 38,
    "location": "15.783471, -90.230759"
  },
  {
    "country": "Guernsey",
    "lat": 49.465691,
    "lng": -2.585278,
    "total": 60,
    "location": "49.465691, -2.585278"
  },
  {
    "country": "Guinea",
    "lat": 9.945587,
    "lng": -9.696645,
    "total": 16,
    "location": "9.945587, -9.696645"
  },
  {
    "country": "Guinea_Bissau",
    "lat": 11.803749,
    "lng": -15.180413,
    "total": 8,
    "location": "11.803749, -15.180413"
  },
  {
    "country": "Guyana",
    "lat": 4.860416,
    "lng": -58.93018,
    "total": 12,
    "location": "4.860416, -58.93018"
  },
  {
    "country": "Haiti",
    "lat": 18.971187,
    "lng": -72.285215,
    "total": 15,
    "location": "18.971187, -72.285215"
  },
  {
    "country": "Holy_See",
    "lat": 41.902916,
    "lng": 12.453389,
    "total": 6,
    "location": "41.902916, 12.453389"
  },
  {
    "country": "Honduras",
    "lat": 15.199999,
    "lng": -86.241905,
    "total": 172,
    "location": "15.199999, -86.241905"
  },
  {
    "country": "Hungary",
    "lat": 47.162494,
    "lng": 19.503304,
    "total": 492,
    "location": "47.162494, 19.503304"
  },
  {
    "country": "Iceland",
    "lat": 64.963051,
    "lng": -19.020835,
    "total": 1135,
    "location": "64.963051, -19.020835"
  },
  {
    "country": "India",
    "lat": 20.593684,
    "lng": 78.96288,
    "total": 1397,
    "location": "20.593684, 78.96288"
  },
  {
    "country": "Indonesia",
    "lat": -0.789275,
    "lng": 113.921327,
    "total": 1528,
    "location": "-0.789275, 113.921327"
  },
  {
    "country": "Iran",
    "lat": 32.427908,
    "lng": 53.688046,
    "total": 44606,
    "location": "32.427908, 53.688046"
  },
  {
    "country": "Iraq",
    "lat": 33.223191,
    "lng": 43.679291,
    "total": 694,
    "location": "33.223191, 43.679291"
  },
  {
    "country": "Ireland",
    "lat": 53.41291,
    "lng": -8.24389,
    "total": 3235,
    "location": "53.41291, -8.24389"
  },
  {
    "country": "Isle_of_Man",
    "lat": 54.236107,
    "lng": -4.548056,
    "total": 52,
    "location": "54.236107, -4.548056"
  },
  {
    "country": "Israel",
    "lat": 31.046051,
    "lng": 34.851612,
    "total": 4916,
    "location": "31.046051, 34.851612"
  },
  {
    "country": "Italy",
    "lat": 41.87194,
    "lng": 12.56738,
    "total": 105792,
    "location": "41.87194, 12.56738"
  },
  {
    "country": "Jamaica",
    "lat": 18.109581,
    "lng": -77.297508,
    "total": 38,
    "location": "18.109581, -77.297508"
  },
  {
    "country": "Japan",
    "lat": 36.204824,
    "lng": 138.252924,
    "total": 1953,
    "location": "36.204824, 138.252924"
  },
  {
    "country": "Jersey",
    "lat": 49.214439,
    "lng": -2.13125,
    "total": 81,
    "location": "49.214439, -2.13125"
  },
  {
    "country": "Jordan",
    "lat": 30.585164,
    "lng": 36.238414,
    "total": 274,
    "location": "30.585164, 36.238414"
  },
  {
    "country": "Kazakhstan",
    "lat": 48.019573,
    "lng": 66.923684,
    "total": 340,
    "location": "48.019573, 66.923684"
  },
  {
    "country": "Kenya",
    "lat": -0.023559,
    "lng": 37.906193,
    "total": 59,
    "location": "-0.023559, 37.906193"
  },
  {
    "country": "Kosovo",
    "lat": 42.602636,
    "lng": 20.902977,
    "total": 112,
    "location": "42.602636, 20.902977"
  },
  {
    "country": "Kuwait",
    "lat": 29.31166,
    "lng": 47.481766,
    "total": 289,
    "location": "29.31166, 47.481766"
  },
  {
    "country": "Kyrgyzstan",
    "lat": 41.20438,
    "lng": 74.766098,
    "total": 107,
    "location": "41.20438, 74.766098"
  },
  {
    "country": "Laos",
    "lat": 19.85627,
    "lng": 102.495496,
    "total": 9,
    "location": "19.85627, 102.495496"
  },
  {
    "country": "Latvia",
    "lat": 56.879635,
    "lng": 24.603189,
    "total": 398,
    "location": "56.879635, 24.603189"
  },
  {
    "country": "Lebanon",
    "lat": 33.854721,
    "lng": 35.862285,
    "total": 463,
    "location": "33.854721, 35.862285"
  },
  {
    "country": "Liberia",
    "lat": 6.428055,
    "lng": -9.429499,
    "total": 3,
    "location": "6.428055, -9.429499"
  },
  {
    "country": "Libya",
    "lat": 26.3351,
    "lng": 17.228331,
    "total": 10,
    "location": "26.3351, 17.228331"
  },
  {
    "country": "Liechtenstein",
    "lat": 47.166,
    "lng": 9.555373,
    "total": 68,
    "location": "47.166, 9.555373"
  },
  {
    "country": "Lithuania",
    "lat": 55.169438,
    "lng": 23.881275,
    "total": 533,
    "location": "55.169438, 23.881275"
  },
  {
    "country": "Luxembourg",
    "lat": 49.815273,
    "lng": 6.129583,
    "total": 2178,
    "location": "49.815273, 6.129583"
  },
  {
    "country": "Madagascar",
    "lat": -18.766947,
    "lng": 46.869107,
    "total": 46,
    "location": "-18.766947, 46.869107"
  },
  {
    "country": "Malaysia",
    "lat": 4.210484,
    "lng": 101.975766,
    "total": 2626,
    "location": "4.210484, 101.975766"
  },
  {
    "country": "Maldives",
    "lat": 3.202778,
    "lng": 73.22068,
    "total": 18,
    "location": "3.202778, 73.22068"
  },
  {
    "country": "Mali",
    "lat": 17.570692,
    "lng": -3.996166,
    "total": 18,
    "location": "17.570692, -3.996166"
  },
  {
    "country": "Malta",
    "lat": 35.937496,
    "lng": 14.375416,
    "total": 167,
    "location": "35.937496, 14.375416"
  },
  {
    "country": "Mauritania",
    "lat": 21.00789,
    "lng": -10.940835,
    "total": 5,
    "location": "21.00789, -10.940835"
  },
  {
    "country": "Mauritius",
    "lat": -20.348404,
    "lng": 57.552152,
    "total": 143,
    "location": "-20.348404, 57.552152"
  },
  {
    "country": "Mexico",
    "lat": 23.634501,
    "lng": -102.552784,
    "total": 1215,
    "location": "23.634501, -102.552784"
  },
  {
    "country": "Moldova",
    "lat": 47.411631,
    "lng": 28.369885,
    "total": 353,
    "location": "47.411631, 28.369885"
  },
  {
    "country": "Monaco",
    "lat": 43.750298,
    "lng": 7.412841,
    "total": 52,
    "location": "43.750298, 7.412841"
  },
  {
    "country": "Mongolia",
    "lat": 46.862496,
    "lng": 103.846656,
    "total": 12,
    "location": "46.862496, 103.846656"
  },
  {
    "country": "Montenegro",
    "lat": 42.708678,
    "lng": 19.37439,
    "total": 109,
    "location": "42.708678, 19.37439"
  },
  {
    "country": "Montserrat",
    "lat": 16.742498,
    "lng": -62.187366,
    "total": 5,
    "location": "16.742498, -62.187366"
  },
  {
    "country": "Morocco",
    "lat": 31.791702,
    "lng": -7.09262,
    "total": 617,
    "location": "31.791702, -7.09262"
  },
  {
    "country": "Mozambique",
    "lat": -18.665695,
    "lng": 35.529562,
    "total": 8,
    "location": "-18.665695, 35.529562"
  },
  {
    "country": "Myanmar",
    "lat": 21.913965,
    "lng": 95.956223,
    "total": 15,
    "location": "21.913965, 95.956223"
  },
  {
    "country": "Namibia",
    "lat": -22.95764,
    "lng": 18.49041,
    "total": 11,
    "location": "-22.95764, 18.49041"
  },
  {
    "country": "Nepal",
    "lat": 28.394857,
    "lng": 84.124008,
    "total": 5,
    "location": "28.394857, 84.124008"
  },
  {
    "country": "Netherlands",
    "lat": 52.132633,
    "lng": 5.291266,
    "total": 12595,
    "location": "52.132633, 5.291266"
  },
  {
    "country": "New_Caledonia",
    "lat": -20.904305,
    "lng": 165.618042,
    "total": 16,
    "location": "-20.904305, 165.618042"
  },
  {
    "country": "New_Zealand",
    "lat": -40.900557,
    "lng": 174.885971,
    "total": 647,
    "location": "-40.900557, 174.885971"
  },
  {
    "country": "Nicaragua",
    "lat": 12.865416,
    "lng": -85.207229,
    "total": 5,
    "location": "12.865416, -85.207229"
  },
  {
    "country": "Niger",
    "lat": 17.607789,
    "lng": 8.081666,
    "total": 20,
    "location": "17.607789, 8.081666"
  },
  {
    "country": "Nigeria",
    "lat": 9.081999,
    "lng": 8.675277,
    "total": 131,
    "location": "9.081999, 8.675277"
  },
  {
    "country": "North_Macedonia",
    "lat": 41.608635,
    "lng": 21.745275,
    "total": 329,
    "location": "41.608635, 21.745275"
  },
  {
    "country": "Northern_Mariana_Islands",
    "lat": 17.33083,
    "lng": 145.38469,
    "total": 6,
    "location": "17.33083, 145.38469"
  },
  {
    "country": "Norway",
    "lat": 60.472024,
    "lng": 8.468946,
    "total": 4447,
    "location": "60.472024, 8.468946"
  },
  {
    "country": "Oman",
    "lat": 21.512583,
    "lng": 55.923255,
    "total": 192,
    "location": "21.512583, 55.923255"
  },
  {
    "country": "Pakistan",
    "lat": 30.375321,
    "lng": 69.345116,
    "total": 2039,
    "location": "30.375321, 69.345116"
  },
  {
    "country": "Palestine",
    "lat": 31.952162,
    "lng": 35.233154,
    "total": 117,
    "location": "31.952162, 35.233154"
  },
  {
    "country": "Panama",
    "lat": 8.537981,
    "lng": -80.782127,
    "total": 1181,
    "location": "8.537981, -80.782127"
  },
  {
    "country": "Papua_New_Guinea",
    "lat": -6.314993,
    "lng": 143.95555,
    "total": 1,
    "location": "-6.314993, 143.95555"
  },
  {
    "country": "Paraguay",
    "lat": -23.442503,
    "lng": -58.443832,
    "total": 69,
    "location": "-23.442503, -58.443832"
  },
  {
    "country": "Peru",
    "lat": -9.189967,
    "lng": -75.015152,
    "total": 1065,
    "location": "-9.189967, -75.015152"
  },
  {
    "country": "Philippines",
    "lat": 12.879721,
    "lng": 121.774017,
    "total": 2084,
    "location": "12.879721, 121.774017"
  },
  {
    "country": "Poland",
    "lat": 51.919438,
    "lng": 19.145136,
    "total": 2311,
    "location": "51.919438, 19.145136"
  },
  {
    "country": "Portugal",
    "lat": 39.399872,
    "lng": -8.224454,
    "total": 7443,
    "location": "39.399872, -8.224454"
  },
  {
    "country": "Puerto_Rico",
    "lat": 18.220833,
    "lng": -66.590149,
    "total": 239,
    "location": "18.220833, -66.590149"
  },
  {
    "country": "Qatar",
    "lat": 25.354826,
    "lng": 51.183884,
    "total": 781,
    "location": "25.354826, 51.183884"
  },
  {
    "country": "Romania",
    "lat": 45.943161,
    "lng": 24.96676,
    "total": 2245,
    "location": "45.943161, 24.96676"
  },
  {
    "country": "Russia",
    "lat": 61.52401,
    "lng": 105.318756,
    "total": 2337,
    "location": "61.52401, 105.318756"
  },
  {
    "country": "Rwanda",
    "lat": -1.940278,
    "lng": 29.873888,
    "total": 75,
    "location": "-1.940278, 29.873888"
  },
  {
    "country": "Saint_Kitts_and_Nevis",
    "lat": 17.357822,
    "lng": -62.782998,
    "total": 8,
    "location": "17.357822, -62.782998"
  },
  {
    "country": "Saint_Lucia",
    "lat": 13.909444,
    "lng": -60.978893,
    "total": 13,
    "location": "13.909444, -60.978893"
  },
  {
    "country": "Saint_Vincent_and_the_Grenadines",
    "lat": 12.984305,
    "lng": -61.287228,
    "total": 1,
    "location": "12.984305, -61.287228"
  },
  {
    "country": "San_Marino",
    "lat": 43.94236,
    "lng": 12.457777,
    "total": 230,
    "location": "43.94236, 12.457777"
  },
  {
    "country": "Saudi_Arabia",
    "lat": 23.885942,
    "lng": 45.079162,
    "total": 1563,
    "location": "23.885942, 45.079162"
  },
  {
    "country": "Senegal",
    "lat": 14.497401,
    "lng": -14.452362,
    "total": 175,
    "location": "14.497401, -14.452362"
  },
  {
    "country": "Serbia",
    "lat": 44.016521,
    "lng": 21.005859,
    "total": 900,
    "location": "44.016521, 21.005859"
  },
  {
    "country": "Seychelles",
    "lat": -4.679574,
    "lng": 55.491977,
    "total": 10,
    "location": "-4.679574, 55.491977"
  },
  {
    "country": "Sierra_Leone",
    "lat": 8.460555,
    "lng": -11.779889,
    "total": 1,
    "location": "8.460555, -11.779889"
  },
  {
    "country": "Singapore",
    "lat": 1.352083,
    "lng": 103.819836,
    "total": 879,
    "location": "1.352083, 103.819836"
  },
  {
    "country": "Slovakia",
    "lat": 48.669026,
    "lng": 19.699024,
    "total": 363,
    "location": "48.669026, 19.699024"
  },
  {
    "country": "Slovenia",
    "lat": 46.151241,
    "lng": 14.995463,
    "total": 814,
    "location": "46.151241, 14.995463"
  },
  {
    "country": "Somalia",
    "lat": 5.152149,
    "lng": 46.199616,
    "total": 3,
    "location": "5.152149, 46.199616"
  },
  {
    "country": "South_Africa",
    "lat": -30.559482,
    "lng": 22.937506,
    "total": 1353,
    "location": "-30.559482, 22.937506"
  },
  {
    "country": "South_Korea",
    "lat": 35.907757,
    "lng": 127.766922,
    "total": 9786,
    "location": "35.907757, 127.766922"
  },
  {
    "country": "Spain",
    "lat": 40.463667,
    "lng": -3.74922,
    "total": 94417,
    "location": "40.463667, -3.74922"
  },
  {
    "country": "Sri_Lanka",
    "lat": 7.873054,
    "lng": 80.771797,
    "total": 122,
    "location": "7.873054, 80.771797"
  },
  {
    "country": "Sudan",
    "lat": 12.862807,
    "lng": 30.217636,
    "total": 7,
    "location": "12.862807, 30.217636"
  },
  {
    "country": "Suriname",
    "lat": 3.919305,
    "lng": -56.027783,
    "total": 10,
    "location": "3.919305, -56.027783"
  },
  {
    "country": "Sweden",
    "lat": 60.128161,
    "lng": 18.643501,
    "total": 4435,
    "location": "60.128161, 18.643501"
  },
  {
    "country": "Switzerland",
    "lat": 46.818188,
    "lng": 8.227512,
    "total": 16108,
    "location": "46.818188, 8.227512"
  },
  {
    "country": "Syria",
    "lat": 34.802075,
    "lng": 38.996815,
    "total": 10,
    "location": "34.802075, 38.996815"
  },
  {
    "country": "Taiwan",
    "lat": 23.69781,
    "lng": 120.960515,
    "total": 322,
    "location": "23.69781, 120.960515"
  },
  {
    "country": "Thailand",
    "lat": 15.870032,
    "lng": 100.992541,
    "total": 1651,
    "location": "15.870032, 100.992541"
  },
  {
    "country": "Timor_Leste",
    "lat": -8.874217,
    "lng": 125.727539,
    "total": 1,
    "location": "-8.874217, 125.727539"
  },
  {
    "country": "Togo",
    "lat": 8.619543,
    "lng": 0.824782,
    "total": 34,
    "location": "8.619543, 0.824782"
  },
  {
    "country": "Trinidad_and_Tobago",
    "lat": 10.691803,
    "lng": -61.222503,
    "total": 87,
    "location": "10.691803, -61.222503"
  },
  {
    "country": "Tunisia",
    "lat": 33.886917,
    "lng": 9.537499,
    "total": 362,
    "location": "33.886917, 9.537499"
  },
  {
    "country": "Turkey",
    "lat": 38.963745,
    "lng": 35.243322,
    "total": 15422,
    "location": "38.963745, 35.243322"
  },
  {
    "country": "Turks_and_Caicos_islands",
    "lat": 21.694025,
    "lng": -71.797928,
    "total": 5,
    "location": "21.694025, -71.797928"
  },
  {
    "country": "Uganda",
    "lat": 1.373333,
    "lng": 32.290275,
    "total": 44,
    "location": "1.373333, 32.290275"
  },
  {
    "country": "Ukraine",
    "lat": 48.379433,
    "lng": 31.16558,
    "total": 549,
    "location": "48.379433, 31.16558"
  },
  {
    "country": "United_Arab_Emirates",
    "lat": 23.424076,
    "lng": 53.847818,
    "total": 664,
    "location": "23.424076, 53.847818"
  },
  {
    "country": "United_Kingdom",
    "lat": 55.378051,
    "lng": -3.435973,
    "total": 25150,
    "location": "55.378051, -3.435973"
  },
  {
    "country": "United_Republic_of_Tanzania",
    "lat": -6.369028,
    "lng": 34.888822,
    "total": 19,
    "location": "-6.369028, 34.888822"
  },
  {
    "country": "United_States_of_America",
    "lat": 37.09024,
    "lng": -95.712891,
    "total": 189618,
    "location": "37.09024, -95.712891"
  },
  {
    "country": "United_States_Virgin_Islands",
    "lat": 18.335765,
    "lng": -64.896335,
    "total": 30,
    "location": "18.335765, -64.896335"
  },
  {
    "country": "Uruguay",
    "lat": -32.522779,
    "lng": -55.765835,
    "total": 338,
    "location": "-32.522779, -55.765835"
  },
  {
    "country": "Uzbekistan",
    "lat": 41.377491,
    "lng": 64.585262,
    "total": 173,
    "location": "41.377491, 64.585262"
  },
  {
    "country": "Venezuela",
    "lat": 6.42375,
    "lng": -66.58973,
    "total": 135,
    "location": "6.42375, -66.58973"
  },
  {
    "country": "Vietnam",
    "lat": 14.058324,
    "lng": 108.277199,
    "total": 229,
    "location": "14.058324, 108.277199"
  },
  {
    "country": "Zambia",
    "lat": -13.133897,
    "lng": 27.849332,
    "total": 35,
    "location": "-13.133897, 27.849332"
  },
  {
    "country": "Zimbabwe",
    "lat": -19.015438,
    "lng": 29.154857,
    total: 8,
    location: [-19.015438, 29.154857]
  }
]

// Loop through the extra countries array and create one marker for each country object
for (var i = 0; i < extra_countries.length; i++) {

  // Add circles to map
  L.circle(extra_countries[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "white",
    // Adjust radius
    radius: countries[i].total * 200,
    // Make percent
  }).addTo(myMap);
}