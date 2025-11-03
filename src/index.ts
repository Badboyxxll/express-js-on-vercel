// index.js
const express = require('express');
const app = express();

app.use(express.json());

// root route
app.get('/', (req, res) => {
  res.send('Server is running — try /api or /api/automation');
});

// old sample route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the Express API!' });
});

// ✅ new working automation endpoint
app.post('/api/automation', (req, res) => {
  res.json({
    success: true,
    message: 'Automation endpoint is working!',
    received: req.body || null
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
