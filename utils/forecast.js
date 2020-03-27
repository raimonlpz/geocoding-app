const request = require("request");

// DARKSKY API

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/a47a5744d8f2dea4a96ef3202f9fa1d4/${latitude},${longitude}?units=si`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service...", undefined);
    } else if (response.body.error) {
      callback("Unable to find location...", undefined);
    } else {
      const { temperature, precipProbability } = response.body.currently;
      let summary = response.body.daily.data[0].summary.replace(".", "");
      callback(
        undefined,
        `${summary}: It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
