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
