const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('app/public'))

app.listen(process.env.PORT || 8080, () => console.log('ALl is good: https://mighty-cove-17824.herokuapp.com/home.html \n https://mighty-cove-17824.herokuapp.com/survey.html'));