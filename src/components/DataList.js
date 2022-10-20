import React from "react";
import "../components/DataList.css";

export default function DataList() {
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
          <tr>
            <td>Alfreds </td>
            <td>Ander</td>
            <td>alfreders@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
