import React from "react";
import "./paginate.css";

const Pagination = ({ postperpage, totalPost, paginate }) => {
  const pageNumber = [];

  //for loop
  for (let i = 1; i <= Math.ceil(totalPost / postperpage); i++) {
    pageNumber.push(i);
  }

  console.log(pageNumber);

  return (
    <div className="button">
      {pageNumber.map((number) => {
        return (
          <button onClick={() => paginate(number)} key={number}>
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
