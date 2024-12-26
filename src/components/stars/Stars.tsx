import React from "react";

export const Stars = ({ stars }) => {
  return (
    <div style={{ display: "flex" }}>
      <span
        className={`fa fa-star ${Math.floor(stars) >= 1 && "active"}`}
      ></span>{" "}
      <span
        className={`fa fa-star ${Math.floor(stars) >= 2 && "active"}`}
      ></span>{" "}
      <span
        className={`fa fa-star ${Math.floor(stars) >= 3 && "active"}`}
      ></span>{" "}
      <span
        className={`fa fa-star ${Math.floor(stars) >= 4 && "active"}`}
      ></span>{" "}
      <span
        className={`fa fa-star ${Math.floor(stars) >= 5 && "active"}`}
      ></span>
    </div>
  );
};
