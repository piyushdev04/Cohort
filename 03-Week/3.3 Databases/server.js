require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGOURL, {
    userNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.log("MongoDB Connection Error:", err));

// Define User Schema
const User = mongoose.model("User", {
    name: String,
    email: String
});

// Route to Add User
app.post("/add-user", async (req, res) => {
    const {name, email} = req.body;

    try {
        const user = new User({ name, email });
        await user.save();
        res.json({ message: "User added successfully!", user });
    } catch (error) {
        res.status(500).json({ message: "Error saving user", error});
    }
});

// Route to Get All Users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error});
    }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log (`Server running on Port ${PORT}`));