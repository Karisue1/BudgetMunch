import React, { useState } from 'react';
import axios from "axios";

// TODO: CUSTOM CURSOR FOR THE  WEBSITE (Food cursor): https://youtu.be/eCnq2LHNy3E?si=V1_8GZ5zXJJZ1TCe
export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState('');
  const [address, setAddress] = useState({
    streetAddress: "",
    city: "",
    state: "",
    budget:""
  });

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onInputChangeAddress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  // Address Submission Logic
  const onSubmitAddress = async (e) => {
    e.preventDefault();
    
    try {
        // Post the address to your backend
        await axios.post("http://localhost:8080/api/v1/budget/address", address);
        console.log("Address submitted successfully");

        // After the address is submitted, call the restaurant API
        loadRestaurants();
        
    } catch (error) {
       console.error("There was an error submitting the address", error);
    }
  };

  // Fetch Restaurants Logic
  const loadRestaurants = async () => {
    try {
      // Pass the address in the request to get the location-based restaurant data
      const result = await axios.get("http://localhost:8080/api/v1/budget/getLocation", {
        params: {
          //Concatenating the address -> gets called in the getGeoLocation of the backend
          address: `${address.streetAddress}, ${address.city}, ${address.state},${address.budget}`,
          //This budget parameter gets called in the @RequestParam of the backend getGeoLocation
          budget: address.budget
        }
      });
      console.log("Restaurant data fetched:", result.data);
      setRestaurants(result.data); // Set the restaurants data

    } catch (error) {
      console.error("Error fetching restaurant data:", error.response);
    }
  };
  

  return (
    <div className="container">
      <h1>Restaurants Near Me</h1>
      <div className="py-4">
        {/* Address Form */}
        <form onSubmit={onSubmitAddress}>
          <label>Address:</label>
          <input
            type="text"
            name="streetAddress"
            value={address.streetAddress}
            onChange={onInputChangeAddress}
            required
          />
          <label>City</label>
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={onInputChangeAddress}
            required
          />
          <label>State</label>
          <input
            type="text"
            name="state"
            value={address.state}
            onChange={onInputChangeAddress}
            required
          />
          <label>Budget</label>
          <input
            type="text"
            name="budget"
            value={address.budget}
            onChange={onInputChangeAddress}
            required
          />
          <button type="submit">Submit</button> 
        </form>
        <br />

        {/* Search Bar */}
        <input
          type="text"
          className='form-control'
          placeholder='Search Table...'
          name="search"
          onChange={onInputChange}
        />
        <br />

        {/* Restaurant Table */}
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
