import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchRole } from "../redux/slices/roleSlice";

export default function Header() {
  const dispatch = useDispatch();
  const role = useSelector(state => state.role.currentRole);

  function toggleRole() {
    const newRole = role === "member" ? "lead" : "member";
    dispatch(switchRole(newRole));
  }

  return (
    <div
      style={{
        height: "60px",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        borderBottom: "1px solid #e5e7eb",
        marginLeft: "200px",
        justifyContent: "space-between"
      }}
    >
      <h2 style={{ margin: 0 }}>Team Pulse Dashboard</h2>

      <button
        onClick={toggleRole}
        style={{
          padding: "6px 14px",
          borderRadius: "6px",
          background: "#2563eb",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Switch to {role === "member" ? "Team Lead" : "Team Member"}
      </button>
    </div>
  );
}
