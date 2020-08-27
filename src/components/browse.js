import React, { useState, useEffect } from 'react';
import '../componentStyles/browseStyles.css'
import ItemCard from './itemCard';

function Browse() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/items")
    .then((response) => response.json())
    .then((products) => {
      debugger
      setProducts({ products })

    });
  }, []);

  return (
    <div className="productCards">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />


    </div>
  )
}

export default Browse;
