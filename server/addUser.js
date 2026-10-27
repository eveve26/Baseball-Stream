require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/user");

async function createUser() {
    try {
        // const username = 
        // const password = 


        if (Buffer.byteLength(password, "utf8") > 72) {
            throw new Error("Password must be 72 bytes or fewer.");
        }

        await mongoose.connect(process.env.MONGODB_URI);

        await User.init();

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            throw new Error("This username already exists.");
        }

        const passwordHash = await bcrypt.hash(password, 12);

        await User.create({
            username,
            passwordHash,
        });

        console.log(`User "${username}" created.`);
    } catch (error) {
        console.error("Could not create user:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

createUser();