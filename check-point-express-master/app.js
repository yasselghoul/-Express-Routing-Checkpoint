const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const date = require( './date' )




app.use(express.static(path.join(__dirname)));


app.use(date);

// Routes
app.get('/profil', (req, res) => {
    res.sendFile(path.join(__dirname, 'profil.html'));
});

app.get('/service', (req, res) => {
    res.sendFile(path.join(__dirname, 'service.html'));
});

app.get('/contact',date, (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});
app.get('/destination', (req, res) => {
    res.sendFile(path.join(__dirname, 'destination.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
