import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/category', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  const handleUpdate = async (id, items) => {
    const token = localStorage.getItem('token');
    await axios.put(`http://localhost:5000/api/category/${id}`, { items }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const updatedCategories = categories.map(category =>
      category._id === id ? { ...category, items } : category
    );
    setCategories(updatedCategories);
  };
const handleClick = ()=>{
    
}
  return (
    <div>
        {categories.length == 0?   <h3>No items to display</h3>: categories}
        <input
            type="text"
            placeholder="Add new item"
           
          />
          <button onClick={handleClick}>add</button>
      {categories.map(category => (
        <div key={category._id}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Add new item"
            onKeyDown={e => {
              if (e.key === 'Enter') {
                const newItems = [...category.items, e.target.value];
                handleUpdate(category._id, newItems);
                e.target.value = '';
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
