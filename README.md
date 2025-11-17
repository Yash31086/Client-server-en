# Client-server-en
Secure Login Password Hashing Demonstration
This project demonstrates the essential security practice of securely hashing a user's password using Bcrypt on the back-end (server) before it is stored. No plain-text passwords are ever stored.
🚀 Project Setup and Execution
To run this project, you must have Node.js installed on your system.
Prerequisites
 * Node.js: Ensure Node.js is installed.
 * Files: Ensure all four files (package.json, server.js, index.html, README.md) are in the same directory (secure-login-demo).
Step 1: Navigate to the Project Folder
You must execute all commands from the main project directory where the package.json file is located.
 * Open your Terminal / Command Prompt / PowerShell.
 * Use the cd command to navigate into the project folder:
   cd path/to/secure-login-demo 

Step 2: Install Dependencies
Install the required libraries (express and bcrypt).
 * Confirm you are inside the secure-login-demo folder.
 * Run the following command:
   npm install

Step 3: Start the Server
Start the back-end application by running the server.js file.
 * In the same Terminal window, run the start script:
   npm start

 * If successful, the Terminal will show the server status:
   🚀 Server running on http://localhost:3000
Step 4: Test the Password Hashing
 * Open your Web Browser to the URL: http://localhost:3000
 * Fill in a Username and a Password on the form.
 * Click the "Sign Up Now" button.
✅ Verification: View the Secure Hash
Immediately look back at the Terminal window where the server is running (npm start).
The server will log a block of text, proving that the password was hashed:
--- NEW USER SIGNED UP: [Your Username] ---
Password (Plain Text): [The password you typed]
Stored HASH (This is the secure, unrecoverable version saved): $2a$10$.........................
----------------------------------------------

The Stored HASH line is the final, secure output.
🛑 How to Stop the Server
Press Ctrl + C in the Terminal window to shut down the server.
