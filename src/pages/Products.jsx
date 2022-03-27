import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { expenceData } from "../constant/data";
import "./Products.scss";
const headers = [
  { label: "Job Id", key: "id" },
  { label: "Customer Name", key: "name" },
  { label: "Amount Due", key: "amount" },
  { label: "Payment Status", key: "status" },
];

const Products = () => {
  const [data, setdata] = useState(expenceData);
  const searchItem = (e) => {
    const search = e.target.value.toLowerCase();
    const newData = expenceData.filter((item) => {
      return item.name.toLowerCase().includes(search);
    });
    setdata(newData);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="create-button">Create Product</h1>
        <input
          type="text"
          className="search"
          onChange={searchItem}
          placeholder="search...."
        />
        <CSVLink data={data} headers={headers}>
          Download me
        </CSVLink>
      </div>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Job Id</div>
          <div className="col col-2">Customer Name</div>
          <div className="col col-3">Amount Due</div>
          <div className="col col-4">Payment Status</div>
        </li>
        {data &&
          data.map((item, index) => (
            <li className="table-row" key={index}>
              <div className="col col-1" data-label="Job Id">
                {item.id}
              </div>
              <div className="col col-2" data-label="Customer Name">
                {item.name}
              </div>
              <div className="col col-3" data-label="Amount">
                {item.amount}
              </div>
              <div className="col col-4" data-label="Payment Status">
                {item.status}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Products;
