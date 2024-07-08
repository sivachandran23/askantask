
const Coffee = require('../models/Coffee');

const getCoffee = async (req, res) => {
  try {
    const categories = await Coffee.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postCoffee =  async (req, res) => {
  try {
    console.log("req",req.body)
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
};



module.exports = { postCoffee };
