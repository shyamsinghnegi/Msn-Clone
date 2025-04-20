require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Resource = require('./models/Resource');

const app = express();
app.use(cors());
// app.use(express.json());

// Connect to MongoDB 
mongoose.connect(process.env.MONGODB_URI, {

})
.then(() => {
  console.log('Connected to MongoDB');

})
.catch(err => console.error('MongoDB connection error:', err));


app.get('/api/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.status(400).json({ error: 'Search query required' });

    const results = await Resource.find({ 
      $or: [
        { keyword: { $regex: q, $options: 'i' } },
        { name: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } }
      ]
    });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));