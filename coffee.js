const express = require('express');
const Coffee = require('../models/Coffee');
const router = express.Router();

router.post('/addcoffee',async (req, res) => {
    try {
        const { name, rating,  content, price, imageUrl } = req.body;
  
        const newCoffee = new Coffee({
            name,
            rating,
            content,
            price,
            imageUrl
        });
  
        const savedCoffee = await newCoffee.save();
  
        res.status(201).json(savedCoffee); 
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router;