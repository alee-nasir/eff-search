import React from "react";
import "../components/DataList.css";
import { Tourists } from "../Tourists";

export default function DataList(props) {
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
          {Tourists.filter((tourist) =>
            tourist.name.toLocaleLowerCase().includes(props.query)
          ).map((tourist) => (
            <tr>
              <td key={tourist.id}>{tourist.name}</td>
              <td>{tourist.surname}</td>
              <td>{tourist.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
