const express = require("express");
const token = require('./token-router');
const app = express();
const port = 8888;

app.use(express.json());
app.use('/', express.static('./public'));
app.use('/access-token', token);

app.listen(port, function(){
    console.log(`Server up and running on localhost:${port}`);
});