import React from "react";
import "./record.css";
import circle from "../../Assets/Images/circle.png";
import halfcircle from "../../Assets/Images/halfcircle.png";
import { FaLongArrowAltRight } from "react-icons/fa";
function ServiceData() {
  const serviceItem = [
    "Sustainablity",
    "Small Business",
    "forensic Services",
    "Risk Management",
    "CFO Adviser",
  ];
  return (
    <div className="row m-0 p-0">
      <div className="col-lg-6 col-lg-6 col-12 serviceideas">
        <img src={circle} className="circle" />
        <div className="servicenmae">Service</div>
        <div className="ourservices text-capitalize">
          Our services that can help your business
        </div>
        <div className="serviceparagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="serviceparagraph">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt
        </div>
        <img src={halfcircle} className="halfcircle" />
      </div>
      <div className="col-lg-6 col-lg-6 col-12 ourservicesitem">
        {serviceItem.map((item, index) => {
          return (
            <div>
              <div className="indexvalue">{"0" + index}</div>
              <div className="serviceitem">
                <div className="serviceitemname">{item}</div>
                <FaLongArrowAltRight />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceData;
