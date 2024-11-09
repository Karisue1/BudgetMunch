import React, { useState } from 'react';
import axios from "axios";
import './Home.css'; 

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
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

  const onInputChangeAddress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
    setAddressError(""); 
    setBudgetError("");  
  };

  const isValidBudget = (budget) => {
    const num = Number(budget);
    return !isNaN(num) && num > 0;
  };

  const onSubmitAddress = async (e) => {
    e.preventDefault();
    setAddressError("");
    setBudgetError("");

    if (!isValidBudget(address.budget)) {
      setBudgetError("Please enter a valid budget greater than zero.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/v1/budget/address", address);
      console.log("Address submitted successfully");
      const result = await loadRestaurants();

      if (result.length === 0) {
        setAddressError("Please enter a valid address.");
      }
    } catch (error) {
      console.error("There was an error submitting the address", error);
      setAddressError("Error submitting the address. Please try again.");
    }
  };

  const loadRestaurants = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/v1/budget/getLocation", {
        params: {
          address: `${address.streetAddress}, ${address.city}, ${address.state}, ${address.budget}`,
          budget: address.budget
        }
      });
      console.log("Restaurant data fetched:", result.data);
      setRestaurants(result.data);
      return result.data;
    } catch (error) {
      console.error("Error fetching restaurant data:", error.response);
      setAddressError("Failed to fetch restaurant data. Please check the address and try again.");
      return [];
    }
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    const sortedData = [...restaurants].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    setRestaurants(sortedData);
  };

  const renderSortArrow = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? ' ↑' : ' ↓';
    }
    return ' ↕';
  };

  const clearFields = () => {
    setAddress({
      streetAddress: "",
      city: "",
      state: "",
      budget: ""
    });
    setRestaurants([]); // Clear the restaurants array
  };

  const filteredRestaurants = restaurants.filter(restaurant => {
    const searchLowerCase = search.toLowerCase();
    return (
      (restaurant.name && restaurant.name.toLowerCase().includes(searchLowerCase)) ||
      (restaurant.vicinity && restaurant.vicinity.toLowerCase().includes(searchLowerCase)) ||
      (restaurant.rating && String(restaurant.rating).toLowerCase().includes(searchLowerCase)) ||
      (restaurant.price_level && String(restaurant.price_level).toLowerCase().includes(searchLowerCase))
    );
  });

  return (
    <div className="container">
      <h1>Restaurants Near Me</h1>
      <div className="py-4">
        {/* Center the form using flexbox */}
        <form onSubmit={onSubmitAddress} className="d-flex justify-content-center mb-3">
          <div className="input-container d-flex">
            <label>Address:</label>
            <input
              type="text"
              className="form-control me-2"
              name="streetAddress"
              placeholder="Street Address"
              value={address.streetAddress}
              onChange={onInputChangeAddress}
              required
            />

            <label>City:</label>
            <input
              type="text"
              className="form-control me-2"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={onInputChangeAddress}
              required
            />

            <label>State:</label>  
            <input
              type="text"
              className="form-control me-2"
              name="state"
              placeholder="State"
              value={address.state}
              onChange={onInputChangeAddress}
              required
            />

            <label>Budget:</label>
            <input
              type="text"
              className="form-control me-3"
              name="budget"
              placeholder="Budget"
              value={address.budget}
              onChange={onInputChangeAddress}
              required
            />
            <button type="submit" className="btn btn-success me-2">Submit</button>
            <button type="button" className="btn btn-danger " onClick={clearFields}>Clear</button>
          </div>
        </form>

        {addressError && <p style={{ color: 'red' }}>{addressError}</p>}
        {budgetError && <p style={{ color: 'red' }}>{budgetError}</p>}

        <br />

        <input
          type="text"
          className='form-control mb-3'
          placeholder='Search Table...'
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <table className="table table-bordered shadow">
          <thead className="head-style">
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ marginRight: '10px' }}>Name</span>
                  <button onClick={() => handleSort('name')} type="button" className="btn btn-light btn-sm">
                    {renderSortArrow('name')}
                  </button>
                </div>
              </th>
              <th scope="col">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ marginRight: '10px' }}>Vicinity</span>
                  <button onClick={() => handleSort('vicinity')} type="button" className="btn btn-light btn-sm">
                    {renderSortArrow('vicinity')}
                  </button>
                </div>
              </th>
              <th scope="col">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ marginRight: '10px' }}>Rating</span>
                  <button onClick={() => handleSort('rating')} type="button" className="btn btn-light btn-sm">
                    {renderSortArrow('rating')}
                  </button>
                </div>
              </th>
              <th scope="col">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ marginRight: '10px' }}>Price Range per Person</span>
                  <button onClick={() => handleSort('price_level')} type="button" className="btn btn-light btn-sm">
                    {renderSortArrow('price_level')}
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRestaurants.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>No results found</td>
              </tr>
            ) : (
              filteredRestaurants.map((restaurant, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.vicinity}</td>
                  <td>{restaurant.rating}</td>
                  <td>{restaurant.price_level}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
