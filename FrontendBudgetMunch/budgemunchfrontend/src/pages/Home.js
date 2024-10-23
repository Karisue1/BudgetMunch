import React, { useState } from 'react';
import axios from "axios";

// TODO: CUSTOM CURSOR FOR THE  WEBSITE (Food cursor): https://youtu.be/eCnq2LHNy3E?si=V1_8GZ5zXJJZ1TCe
//TODO: FIX the check for invalid address: add API logic

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState('');
  const [address, setAddress] = useState({
    streetAddress: "",
    city: "",
    state: "",
    budget: ""
  });
  const [addressError, setAddressError] = useState(""); 
  const [budgetError, setBudgetError] = useState("");   

  // Input change handler for the address form
  const onInputChangeAddress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
    setAddressError(""); // Reset address error when user is typing
    setBudgetError("");  // Reset budget error when user is typing
  };

  // Logic to check if budget is a digit and greater than zero
  const isValidBudget = (budget) => {
    const num = Number(budget);
    return !isNaN(num) && num > 0;
  };

  // ---Address Submission Logic---
  const onSubmitAddress = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setAddressError("");
    setBudgetError("");

    // Check if the budget is valid
    if (!isValidBudget(address.budget)) {
      setBudgetError("Please enter a valid budget greater than zero.");
    }

    try {
      // Post the address to your backend
      await axios.post("http://localhost:8080/api/v1/budget/address", address);
      console.log("Address submitted successfully");

      // After the address is submitted, call the restaurant API
      const result = await loadRestaurants();

      // If no restaurants are returned, set an address error
      if (result.length === 0) {
        setAddressError("Please enter a valid address.");
      }
    } catch (error) {
      console.error("There was an error submitting the address", error);
      setAddressError("Error submitting the address. Please try again.");
    }
  };
  //---End of Address Submission Logic---

  // Fetch Restaurants Logic
  const loadRestaurants = async () => {
    try {
      // Pass the address in the request to get the location-based restaurant data
      const result = await axios.get("http://localhost:8080/api/v1/budget/getLocation", {
        params: {
          // Concatenating the address -> gets called in the getGeoLocation of the backend
          address: `${address.streetAddress}, ${address.city}, ${address.state},${address.budget}`,
          budget: address.budget
        }
      });
      console.log("Restaurant data fetched:", result.data);
      setRestaurants(result.data); // Set the restaurants data

      return result.data; // Return restaurant data for validation
    } catch (error) {
      console.error("Error fetching restaurant data:", error.response);
      setAddressError("Failed to fetch restaurant data. Please check the address and try again.");
      return [];
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

        {/* Display both errors */}
        {addressError && <p style={{ color: 'red' }}>{addressError}</p>}
        {budgetError && <p style={{ color: 'red' }}>{budgetError}</p>}

        <br />

        {/* Search Bar */}
        <input
          type="text"
          className='form-control'
          placeholder='Search Table...'
          name="search"
          onChange={(e) => setSearch(e.target.value)}
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