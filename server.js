const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('app/public'))

app.listen(process.env.PORT || 8080, () => console.log('ALl is good: https://mighty-cove-17824.herokuapp.com/home.html \n https://mighty-cove-17824.herokuapp.com/survey.html \n http://localhost:8080/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
