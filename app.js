const express = require('express');
const app = express();
var router = require('./app/route/route');
const port = 3007;

app.use('/api/v1/voting', router);

app.listen(port, () => {
    console.log(`Voting app is live at port ${port}`);
});