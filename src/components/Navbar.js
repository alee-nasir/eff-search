import React from "react";
import { MdBrightness6 } from "react-icons/md";
import "../components/Navbar.css";

export default function Navbar() {
  return (
    <div data-testid="Navbar" className="nav-container">
      <h1 aria-label="React Tourism">React Tourism</h1>
      <nav>
        <ul>
          <li>
            <a href="/admin-panel">Admin Panel</a>
          </li>
          <li>
            <a href="/Users">Users</a>
          </li>
          <li>
            <a href="/Settings">Settings</a>
          </li>
          <li>
            <a href="/theme">
              <MdBrightness6 />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
