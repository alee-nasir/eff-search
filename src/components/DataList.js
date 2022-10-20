import React from "react";
import "../components/DataList.css";

export default function DataList({ data }) {
  return (
    <div className="table-container">
      <h1>Tourists 2022</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((tourist) => (
            <tr key={tourist.id}>
              <td>{tourist.name}</td>
              <td>{tourist.surname}</td>
              <td>{tourist.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
