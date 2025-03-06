const express = require('express');

const app = express();
let requestCount = 0;

app.use((req, res, next) => {
    requestCount++;
    next();
});

app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
    res.status(200).json({ msg: 'created dummy user '});
});

app.get('/requestCount', function(req, res) {
    res.status(200).json({ requestCount});
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});