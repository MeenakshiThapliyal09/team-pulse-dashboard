import React from "react";
import { useSelector } from "react-redux";

function SummaryCards() {
  const members = useSelector(state => state.members.members);

  const statusCount = {
    Working: 0,
    Break: 0,
    Meeting: 0,
    Offline: 0
  };

  members.forEach(m => {
    statusCount[m.status] += 1;
  });

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "12px",
      marginBottom: "20px"
    }}>
      {Object.entries(statusCount).map(([status, count]) => (
        <div key={status} style={{
          background: "#ffffff",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #e5e7eb",
          textAlign: "center"
        }}>
          <div style={{ fontSize: "14px", color: "#6b7280" }}>{status}</div>
          <div style={{ fontSize: "20px", fontWeight: 600 }}>{count}</div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;