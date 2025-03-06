const express = require("express");
const app = express();

function ticketChecker(req, res, next) {
    const ticket = req.query.ticket;
    if (ticket === "free") {
        next();
    } else {
        res.status(403).send("Access denied");
    }
}

app.use(ticketChecker);

app.get("/ride1", ticketChecker, function (req, res) {
    res.send("You rode the first ride!");
});

app.get("/ride2", ticketChecker, function (req, res) {
    res.send("You rode the second ride!");
});

app.get("/ride3", ticketChecker, function(req, res) {
    res.send("You rode the third ride!");
});

app.listen(3000);