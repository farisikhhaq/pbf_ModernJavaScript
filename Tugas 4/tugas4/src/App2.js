import React from "react";
import ChildClass from "./Page/ChildClass";

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function ParamsExample(){
  return(
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/gmail">Gmail</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/amazon">Amazon</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/:id" element={<ChildClass />}/>
        </Routes>
      </div>
    </Router>
  );
}