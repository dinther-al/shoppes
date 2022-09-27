import React, { useState } from "react";
import "../css/FormDesc.css";
import "../css/grid.css";
import "../../index.css";
import Description from "../pages/Description";
import Reviews from "../pages/Reviews";

const titles = [
  {
    id: 1,
    name: "Description",
  },
  {
    id: 2,
    name: "Reviews (15)",
  },
];

export default function FormDesc() {
  const [titleId, setTitleId] = useState(1);

  console.log(titleId);

  return (
    <div className="Form-Desc grid wide">
      <nav>
        <ul className="nav">
          {titles.map((title) => {
            return (
              <li className="subnav" key={title.id}>
                <p
                  className={`subnav_link ${titleId === title.id && "active"}`}
                  onClick={() => setTitleId(title.id)}
                >
                  {title.name}
                </p>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {titleId === 2 ? <Reviews /> : <Description />}
    </div>
  );
}
