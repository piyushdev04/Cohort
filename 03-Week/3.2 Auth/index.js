const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "piyush@gmail.com",
        password: "123",
        name: "piyush bafna",
    },
    {
        username: "piyushtest@gmail.com",
        password: "123321",
        name: "piyush test",
    },
    {
        username: "usertest@gmail.com",
        password: "321321",
        name: "user test",
    },
];

function userExists(username, password) {
    return ALL_USERS.some(user => user.username === username && user.password === password);
}

app.post("/signin", function (req, res) {
    const { username, password } = req.body;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our memory db",
        });
    }

    const token = jwt.sign({ username: username }, jwtPassword, {expiresIn: "1h"} );
    return res.json({
        token,
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({msg: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;

        const otherUsers = ALL_USERS.filter(user => user.username !== username);

        return res.json(otherUsers);
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000)