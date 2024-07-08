import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Arabica = () => {
    const navigate = useNavigate();
    const [name, setcoffeename] = useState('');
    const [price, setprice] = useState('');
    const [rating, setrating] = useState('');
    const [content, setcontent] = useState('');
    const [imageUrl, setimageUrl] = useState('');
  const handleClick = async () => {
    const postData = {
        name : "mocha",
        price: 10,
         rating : 5, content : "this is content", imageUrl : "image link"
    }
    try {
      const response = await axios.post('http://localhost:5000/api/coffee/addcoffee', postData)
      .then(response => {
        console.log('POST request successful:', response.data);
    });
      console.log(response);
    } catch (error) {
    }
  };

  return (
    <>
    This is Arabica page
    <button onClick={handleClick}>add</button>
    </>
  );
};

export default Arabica;
