const express = require('express');
const app = express();

let isStarted = false;
let isDbConnected = false;
let isAlive = true;

// Simulate slow startup (30 seconds)
setTimeout(() => {
    console.log("Application startup complete");
    isStarted = true;
    isDbConnected = true;
}, 30000);

// Startup Probe
app.get('/health/startup', (req, res) => {
    if (isStarted) {
        return res.status(200).send("Startup complete");
    }
    return res.status(500).send("Starting...");
});

// Liveness Probe
app.get('/health/live', (req, res) => {
    if (isAlive) {
        return res.status(200).send("Alive");
    }
    return res.status(500).send("Dead");
});

// Readiness Probe
app.get('/health/ready', (req, res) => {
    if (isDbConnected) {
        return res.status(200).send("Ready");
    }
    return res.status(500).send("DB not connected");
});

// Toggle DB failure
app.get('/simulate-db-down', (req, res) => {
    isDbConnected = false;
    res.send("DB disconnected");
});

// Toggle liveness failure
app.get('/simulate-dead', (req, res) => {
    isAlive = false;
    res.send("Application marked dead");
});

app.listen(8080, () => {
    console.log("App listening on port 8080");
});
