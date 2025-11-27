import React from "react";

export default function MemberCard({ member }) {
  return (
    <div
      style={{
        padding: "12px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        background: "#ffffff",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <div>
        <div style={{ fontWeight: 600 }}>{member.name}</div>
        <div style={{ fontSize: "13px", color: "#555" }}>
          Status: {member.status}
        </div>
      </div>
    </div>
  );
}
