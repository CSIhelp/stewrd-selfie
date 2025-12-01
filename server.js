const express = require('express');
const path = require('path');

const app = express();

// Serve static files (your HTML, CSS, JS)
app.use(express.static(__dirname));

// Fallback: serve selfie.html for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'selfie.html'));
});

// Use Railway's PORT environment variable, default 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Selfie app running on port ${PORT}`);
});
