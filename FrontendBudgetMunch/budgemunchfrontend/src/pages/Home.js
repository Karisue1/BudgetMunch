import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const[search, setSearch] = useState('');

  const onInputChange = (e)=>{
    setSearch(e.target.value)
  };

  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = async () => {
    const result = await axios.get("http://localhost:8080/api/v1/budget/getLocation");
    setRestaurants(result.data);
  }

  return (
    <div className="container">
      <h1>Restaurants Near Me</h1>
      <div className="py-4">

        {/* Search Bar Input */}
        <input
          type = {"text"}
          className='form-control'
          placeholder='Search Table...'
          name="search"
          onChange={(e)=>onInputChange(e)}
        />
        <br/>

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
            {restaurants.filter(index => {
              const searchLowerCase = search.toLowerCase();
              return(
                index.name.toLowerCase().includes(searchLowerCase) ||
                index.vicinity.toLowerCase().includes(searchLowerCase)||
                String(index.rating.toLowerCase().includes(searchLowerCase))||
                String(index.price_level.toLowerCase().includes(searchLowerCase))
              );}).map((restaurant, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.vicinity}</td>
                  <td>{restaurant.rating}</td>
                  <td>{restaurant.price_level}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
