import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet
} from 'react-router-dom';
import Kuliner from "./Makanan";
import ReviewHotel from "./HotelReview";
import Travelling from "./Travelling";

function Topics(){
    return(
      <div className="Topics">
        <ul>
          <li>
            <Link to="/topics/kuliner">Kuliner</Link>
          </li>
          <li>
            <Link to="/topics/review-hotel">Review Hotel</Link>
          </li>
          <li>
            <Link to="/topics/travelling">Travelling</Link>
          </li>
        </ul>

        <Outlet/>
      </div>
    );
}

export default Topics;