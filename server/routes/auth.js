const User = require("../models/user");
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const requireLogin = require("../middleware/requireLogin");

router.get("/me", requireLogin, async (req, res) => {
    try {
        const user = await User.findById(req.session.userId)
            .select("_id username");

        if (!user) {
            return res.status(401).json({ message: "Not logged in." });
        }

        res.json({ user });
    } catch {
        res.status(500).json({ message: "Server error." });
    }
});

router.post("/login", async (req, res) => {

    const { username, password } = req.body ?? {};

    if (
        typeof username !== "string" ||
        typeof password !== "string" ||
        !username.trim() ||
        !password
    ) {
        return res.status(400).json({
            message: "Username and password are required.",
        });
    }

    try {
        const user = await User.findOne({
            username: username.trim(),
        });

        const valid = user
            ? await bcrypt.compare(password, user.passwordHash)
            : false;

        if (!valid) {
            return res.status(401).json({
                message: "Invalid username or password.",
            });
        }

        // Create a new session after successful authentication.
        req.session.regenerate((error) => {
            if (error) {
                return res.status(500).json({
                    message: "Could not create session.",
                });
            }

            req.session.userId = user._id.toString();

            req.session.save((error) => {
                if (error) {
                    return res.status(500).json({
                        message: "Could not save session.",
                    });
                }

                res.json({
                    user: {
                        id: user._id,
                        username: user.username,
                    },
                });
            });
        });
    } catch (error) {
        console.error("Login failed:", error.message);
        res.status(500).json({ message: "Server error." });
    }
    
});

module.exports = router;