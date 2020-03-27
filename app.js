const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

let userLocation = process.argv;
userLocation.splice(0, 2);
userLocation = userLocation.join(" ");

if (userLocation) {
  geocode(userLocation, (error, data) => {
    const { latitude, longitude, location } = data;
    if (error) {
      return console.log("Error:", error);
    }
    forecast(latitude, longitude, (error, data) => {
      if (error) {
        return console.log("Error:", error);
      }
      console.log(`${location} - ${data}`);
    });
  });
} else {
  console.log("No location added. Run: 'node app.js <your location>'");
}
// Darksky
// -> Weather

/*

const key = "a47a5744d8f2dea4a96ef3202f9fa1d4";
const params = "2.17694, 41.3825?units=si";
const url = `https://api.darksky.net/forecast/${key}/${params}`;

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service...");
  } else if (response.body.error) {
    console.log("Unable to find location...");
  } else {
    let glob = response.body;
    let degrees = glob.currently.temperature;
    let rain = glob.currently.precipProbability;
    let summary = glob.daily.data[0].summary.replace(".", "");
    console.log(
      `${summary}: It is currently ${degrees} degrees out. There is a ${rain}% chance of rain.`
    );
  }
});

//Geocoding
//Address -> Lat/Long

const token =
  "pk.eyJ1IjoicmFpbW9uMTIzIiwiYSI6ImNrOGEwbDVlNzA2aGUzbGxvMnVkZWV6YjkifQ.HobSv-zMpbkwG59UGJx_SQ";
const newParams = `Barcelona.json?access_token=${token}&limit=1`;
const mapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${newParams}`;

request({ url: mapbox, json: true }, (error, response) => {
  if (error) {
    console.log(
      "Unable to connect to mapbox service, check Internet connection..."
    );
  } else if (
    response.body.message == "Not Found" ||
    response.body.features.length == 0
  ) {
    console.log("Unable to find location. Try another search..");
  } else {
    const place = response.body.features[0].place_name;
    const data = response.body.features[0].center;
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1];
    console.log(place, data);
    console.log(latitude, longitude);
  }
});
*/

/*
const geocode = (address, callback) => {
  const token =
    "pk.eyJ1IjoicmFpbW9uMTIzIiwiYSI6ImNrOGEwbDVlNzA2aGUzbGxvMnVkZWV6YjkifQ.HobSv-zMpbkwG59UGJx_SQ";
  const newParams = `${address}.json?access_token=${token}&limit=1`;
  const mapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${newParams}`;

  request({ url: mapbox, json: true }, (error, response) => {
    if (error) {
      console.log(
        "Unable to connect to mapbox service, check Internet connection..."
      );
    } else if (
      response.body.message == "Not Found" ||
      response.body.features.length == 0
    ) {
      console.log("Unable to find location. Try another search..");
    } else {
      const latitude = response.body.features[0].center[0];
      const longitude = response.body.features[0].center[1];
      callback(latitude, longitude);
    }
  });
};

geocode("Rome", (latitude, longitude) => {
  const key = "a47a5744d8f2dea4a96ef3202f9fa1d4";
  const params = `${latitude},${longitude}?units=si`;
  const url = `https://api.darksky.net/forecast/${key}/${params}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log("Unable to connect to weather service...");
    } else if (response.body.error) {
      console.log("Unable to find location...");
    } else {
      let glob = response.body;
      let degrees = glob.currently.temperature;
      let rain = glob.currently.precipProbability;
      let summary = glob.daily.data[0].summary.replace(".", "");
      console.log(
        `${summary}: It is currently ${degrees} degrees out. There is a ${rain}% chance of rain.`
      );
    }
  });
});
*/

/*
geocode("Cerdanyola", (error, data) => {
  console.log("Error:", error);
  console.log("Data:", data);
});

forecast(2.13889, 41.49194, (error, data) => {
  console.log("Error:", error);
  console.log("Data:", data);
});
*/
