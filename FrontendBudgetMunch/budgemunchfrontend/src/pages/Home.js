import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState('');

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = async () => {
    const result = await axios.get("http://localhost:8080/api/v1/budget/getLocation");
    setRestaurants(result.data);
  };

  return (
    <div className="container">
      <h1>Restaurants Near Me</h1>
      <div className="py-4">

      <input
      type= "text"
      className='address-input'
      placeHolder='Input Your Address...'
      name='address'  
      />



        {/* Search Bar Input */}
        <input
          type="text"
          className='form-control'
          placeholder='Search Table...'
          name="search"
          onChange={onInputChange}
        />
        <br />

        <table className="table table-bordered shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Vicinity</th>
              <th scope="col">Rating</th>
              <th scope="col">Price Level</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.filter(restaurant => {
              const searchLowerCase = search.toLowerCase();
              return (
                (restaurant.name && restaurant.name.toLowerCase().includes(searchLowerCase)) ||
                (restaurant.vicinity && restaurant.vicinity.toLowerCase().includes(searchLowerCase)) ||
                (restaurant.rating && String(restaurant.rating).toLowerCase().includes(searchLowerCase)) ||
                (restaurant.price_level && String(restaurant.price_level).toLowerCase().includes(searchLowerCase))
              );
            }).map((restaurant, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{restaurant.name}</td>
                <td>{restaurant.vicinity}</td>
                <td>{restaurant.rating}</td>
                <td>{restaurant.price_level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
