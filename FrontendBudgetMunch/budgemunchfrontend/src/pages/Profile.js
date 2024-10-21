import Home from "./Home"
import React, { useEffect, useState } from 'react';
import axios from "axios";

export const NotesDetailPage = () => {
    const [restaurants, setRestaurants] = useState([])

 // useEffect(() => {
  //  loadRestaurants();
 // }, []);

 // const loadRestaurants = async () => {
  //  const result = await axios.get("http://localhost:8080/api/v1/budget/getLocation");
 //   setRestaurants(result.data);
 // }

  return (
    <><><h1>List of Locations and menus</h1>
          <ul><Home />
          </ul></><div className="container">
              <div className="py-4">
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
                          {restaurants.map((restaurant, index) => (
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
          </div></>
  );
    
}