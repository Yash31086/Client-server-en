// server.js

const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
const PORT = 3000;

// Simple in-memory "Database" simulation (a Map)
const users = new Map(); 

// Middleware to parse incoming form data (URL-encoded)
app.use(express.urlencoded({ extended: true }));

// Serve the index.html file on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 🔒 Endpoint for User Sign Up and Password Hashing
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("Username and password are required.");
    }
    
    if (users.has(username)) {
        return res.status(409).send(`User **${username}** already exists. Try a different username.`);
    }

    try {
        // 1. Define the cost factor (10 is standard/secure)
        const saltRounds = 10;
        
        // 2. Hash the Password (bcrypt handles salt generation internally)
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // 3. Store the HASHED password in the in-memory map
        users.set(username, { password: hashedPassword });

        // LOGGING THE RESULT TO THE TERMINAL (Crucial for verification)
        console.log(`\n--- NEW USER SIGNED UP: ${username} ---`);
        console.log(`Password (Plain Text): ${password}`);
        console.log(`Stored HASH (This is what you save securely): ${hashedPassword}`);
        console.log(`----------------------------------------------\n`);
        
        // Output confirmation to the browser
        res.send(`
            <h1>✅ Sign Up Successful!</h1>
            <p><strong>Username:</strong> ${username}</p>
            <p>The password has been securely **Hashed** and stored in memory.</p>
            <p><strong>Stored HASH:</strong> <code>${hashedPassword}</code></p>
            <p>Check the **server terminal** for the confirmation logs.</p>
            <p><a href="/">Go Back</a></p>
        `);

    } catch (error) {
        console.error('Hashing or storing error:', error);
        res.status(500).send("Server error during sign up.");
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`Open your browser to http://localhost:${PORT} to start the test.`);
});
