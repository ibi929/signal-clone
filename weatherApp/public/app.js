const express = require("express");
const https = require("http");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body.city);
  // res.send("thanks for your response: " + req.body.city);
  const query = req.body.city;
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&units=metric&appid=9e456b9938e69019d161bc3c2c0b9c08";
  https.get(url, function (response) {
    // console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      console.log(weatherData.main.temp, icon);

      res.write("<p> The current weather is " + description);
      res.write(
        "<h1>The temperature in " +
          query +
          " is " +
          weatherData.main.temp +
          " Degree Celcius</h1>"
      );
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("server starting at port 3000");
});
