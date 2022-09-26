import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import "../css/FormDesc.css";
import "../css/grid.css";
import "../../index.css";
import Description from "../pages/Description";
import Reviews from "../pages/Reviews";
export default function FormDesc() {
  const [isActiveTabDesc, setIsActiveTabDesc] = useState(true);

  return (
    <div className="Form-Desc grid wide">
      <nav>
        <ul className="nav">
          <li className="subnav">
            <Link
              className={`subnav_link ${isActiveTabDesc && 'active'}`}
              to="/"
              onClick={() => setIsActiveTabDesc(true)}
            >
              Description
            </Link>
          </li>
          <li className="subnav">
            <Link 
            className={`subnav_link ${isActiveTabDesc === false ? 'active' : ''}`}
              to="/link"
              onClick={() => {setIsActiveTabDesc(false)}}
            >
              Reviews (15)
            </Link>
          </li>
        </ul>
      </nav>

      
      <Routes>
        {isActiveTabDesc === true ? <Route path="/" element={<Description />} /> : <Route path="/link" element={<Reviews />} />}
      </Routes>
    </div>
  );
}
