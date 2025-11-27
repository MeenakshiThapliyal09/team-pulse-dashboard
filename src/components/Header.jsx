import React from "react";

function Header() {
  return (
    <div style={{
      height: "60px",
      background: "#ffffff",
      display: "flex",
      alignItems: "center",
      padding: "0 20px",
      borderBottom: "1px solid #e5e7eb",
      marginLeft: "200px"  // because sidebar is fixed
    }}>
      <h2 style={{ margin: 0 }}>Team Pulse Dashboard</h2>
    </div>
  );
}
export default Header;