const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    { id: 1, name: "Alice"},
    { id: 2, name: "Bob"}
];

// Home route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Express Server!</h1><p>Use /users to fetch users.</p>");
});

// Fetch all users
app.get("/users", (req, res) => {
    res.status(200).json(users);
});

// Add a new user
app.post("/users", (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Name is required"});

    const newUser = { id: users.length + 1, name};
    users.push(newUser);
    res.status(201).json({ message: "User added", user: newUser});
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});