// src/components/TaskList.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskProgress } from "../redux/slices/membersSlice";

export default function TaskList({ memberId }) {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members.members);
  const member = members.find(m => m.id === memberId);

  if (!member || member.tasks.length === 0) {
    return <p>No tasks assigned.</p>;
  }

  return (
    <div>
      {member.tasks.map(task => (
        <div key={task.id} style={{
          border: "1px solid #e5e7eb",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "10px",
          background: "#fff"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>{task.title}</strong>
            <span style={{ fontSize: "12px", color: "#555" }}>
              {task.dueDate || "No Due Date"}
            </span>
          </div>

          {/* Progress Bar */}
          <div style={{
            marginTop: "8px",
            height: "10px",
            background: "#eee",
            borderRadius: "4px",
            overflow: "hidden"
          }}>
            <div style={{
              width: `${task.progress}%`,
              height: "100%",
              background: "#3b82f6",
              transition: "0.3s"
            }}></div>
          </div>

          {/* Buttons */}
          <div style={{ marginTop: "8px", display: "flex", gap: "8px" }}>
            <button
              onClick={() => dispatch(updateTaskProgress({
                memberId,
                taskId: task.id,
                delta: -10
              }))}
              style={{ padding: "4px 8px" }}
            >
              -10%
            </button>

            <button
              onClick={() => dispatch(updateTaskProgress({
                memberId,
                taskId: task.id,
                delta: +10
              }))}
              style={{ padding: "4px 8px" }}
            >
              +10%
            </button>

            <span style={{ fontSize: "12px", color: "#333" }}>
              {task.progress}% {task.completed ? "✔️" : ""}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
