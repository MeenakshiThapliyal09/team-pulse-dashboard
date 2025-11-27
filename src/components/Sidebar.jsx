import React from "react";

function Sidebar() {
  return (
    <div style={{
      width: "200px",
      background: "#ffffff",
      borderRight: "1px solid #e5e7eb",
      padding: "20px",
      height: "100vh",
      position: "fixed",
      left: 0,
      top: 0
    }}>
      <h3 style={{ marginTop: 0 }}>Menu</h3>
      <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
        <li>Dashboard</li>
        <li>Team Members</li>
        <li>Tasks</li>
      </ul>
    </div>
  );
}
export default Sidebar;