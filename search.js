const express = require('express');
const router = express.Router();
const Website = require('../models/Website');

router.get('/', async (req, res) => {
  try {
    const query = req.query.q;

    const results = await Website.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { keywords: { $regex: query, $options: 'i' } }
      ]
    });

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
