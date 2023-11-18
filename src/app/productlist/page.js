"use client"
import { useEffect, useState } from 'react';

export default function Page(){
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        setData(result.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product Data: </h1>
      {
        data.map(item=>(
           <h3 key={item.id}>Name: {item.title}, Price: {item.price}</h3>
        ))
      }
      {/* {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )} */}
    </div>
  );
};

