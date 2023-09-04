import React from "react";
import "./review.css";
import { BsFileImage } from "react-icons/bs";
function Customer({ data, index }) {
  console.log(index, "index");
  return (
    <div className=" col-lg-3 col-md-3 col-12 mt-4">
      {/* <div className='singlecustomer'> */}
      <div className={index === 0 ? "activesinglecustomer" : "singlecustomer"}>
        <div
          className={index === 0 ? "activesinglefeedback" : "singlefeedback"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </div>

        <div className="customerimageandfeedback">
          {/* <div className='customerimagediv'> */}
          <div
            className={
              index === 0 ? "activecustomerimagediv" : "customerimagediv"
            }
          >
            {/* <img src /> */}
            <BsFileImage />
          </div>
          <div className="dateandname">
            <div
              className={index === 0 ? "activecustomername" : "customername"}
            >
              {data.name}
            </div>
            <div lassName={index === 0 ? "activecustomerdate" : "customerdate"}>
              {data.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
