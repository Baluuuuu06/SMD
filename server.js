const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://balu:Balu2005@smd.aulfeqr.mongodb.net/?retryWrites=true&w=majority&appName=SMD')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));


const socialSchema = new mongoose.Schema({
  platform: String,
  followers: Number,
  likes: Number,
  timestamp: { type: Date, default: Date.now }
});
const Social = mongoose.model('Social', socialSchema);


const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/dashboard-data', (req, res) => {
  res.json({
    facebook: { followers: 1200, likes: 300 },
    twitter: { followers: 950, likes: 220 }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
