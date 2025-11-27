import React from "react";
import SummaryCards from "../components/SummaryCards";
import FiltersBar from "../components/FiltersBar";
import MemberList from "../components/MemberList";

function Dashboard() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 350px",
        gap: "20px",
        padding: "20px",
        marginLeft: "200px",
        marginTop: "60px"
      }}
    >
      {/* LEFT COLUMN */}
      <div>
        <SummaryCards />
        <FiltersBar />

        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #e5e7eb"
          }}
        >
          <h3 style={{ marginTop: 0 }}>Team Members</h3>
          <MemberList />
        </div>
      </div>


      {/* RIGHT COLUMN */}
      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid #e5e7eb"
        }}
      >
        <h3>Right Panel</h3>
        <p>Selected member, task form, charts, etc.</p>
      </div>
    </div>
  );
}

export default Dashboard;
