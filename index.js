const express = require('express');
const app = express();

voxyFunction = (text) => text ? text.length : 0; 

app.get('/', (req, res) => {
    var text = req.query.text;
    res.send(voxyFunction(text).toString());
});

app.listen(3000);