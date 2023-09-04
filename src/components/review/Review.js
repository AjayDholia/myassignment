import React from "react";
import "./review.css";
import { AiOutlineRight } from "react-icons/ai";
import Customer from "./Customer";
function Review() {
  const customerReview = [
    {
      name: "sachin",
      date: "24 Aug 2023",
    },
    {
      name: "deepak",
      date: "24 Aug 2023",
    },
    {
      name: "Akhil",
      date: "24 Aug 2023",
    },
    // {
    //     name:"Digvijay",
    //     date:"24 Aug 2023"
    // },
    // {
    //     name:"Ajay",
    //     date:"24 Aug 2023"
    // },
  ];
  return (
    <div className="reviewmain">
      <div className="feedbackquotes">What our clients say about us</div>
      <div className="customerreviewmain">
        <div className=" row customerreview">
          {customerReview.map((data, index) => {
            return <Customer data={data} index={index} />;
          })}
        </div>
        <AiOutlineRight />
      </div>
    </div>
  );
}

export default Review;
