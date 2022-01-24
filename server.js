const express = require('express');
const path = require('path');
const app = express();
const APP_NAME = 'wayfarer'
app.use(express.static(__dirname + '/dist/' + APP_NAME));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/' + APP_NAME + '/index.html'));
});
app.listen(process.env.PORT || 8080);