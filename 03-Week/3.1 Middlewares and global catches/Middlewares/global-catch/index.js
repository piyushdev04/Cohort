const express = require("express");

const app = express();

app.get("/", function(req, res) {
    console.log(req.body.kidneys.length);
    res.json({
        msg: "done"
    })
})


// if anything goes wrong Global catch
app.use(function(err, req, res, next) {
    res.send({
        msg: "internal error"
    })
})

app.listen(3000);