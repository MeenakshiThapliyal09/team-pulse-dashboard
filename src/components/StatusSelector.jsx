import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMemberStatus } from "../redux/slices/membersSlice";

export default function StatusSelector({ userId }) {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members.members);

  const user = members.find(m => m.id === userId);
  const currentStatus = user?.status;

  const statuses = ["Working", "Break", "Meeting", "Offline"];

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      {statuses.map(status => (
        <button
          key={status}
          onClick={() =>
            dispatch(updateMemberStatus({ memberId: userId, status }))
          }
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            background: currentStatus === status ? "#2563eb" : "#f3f4f6",
            color: currentStatus === status ? "#fff" : "#000",
            border: "1px solid #d1d5db",
            cursor: "pointer",
          }}
        >
          {status}
        </button>
      ))}
    </div>
  );
}
