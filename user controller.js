const User = require('../models/User');

exports.registerUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        res.json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
};
