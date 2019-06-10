const express = require('express');
const app = express();

app.use(express.static('app/public'))

app.listen(process.env.PORT || 8080, () => console.log('ALl is good'));