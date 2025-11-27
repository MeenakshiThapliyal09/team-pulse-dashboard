// src/components/TaskForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { assignTask } from "../redux/slices/membersSlice";

export default function TaskForm({ members }) {
  const dispatch = useDispatch();

  const [memberId, setMemberId] = useState(members[0]?.id || "");
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !memberId) {
      alert("Please fill task details");
      return;
    }

    dispatch(assignTask({
      memberId: Number(memberId),
      title,
      dueDate
    }));

    setTitle("");
    setDueDate("");
    alert("Task assigned successfully!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Assign To:</label><br />
      <select
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
        style={{ marginBottom: "10px" }}
      >
        {members.map(m => (
          <option key={m.id} value={m.id}>{m.name}</option>
        ))}
      </select>

      <br />

      <label>Task Title:</label><br />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: "10px", width: "100%" }}
      />

      <br />

      <label>Due Date:</label><br />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={{ marginBottom: "10px" }}
      />

      <br />

      <button type="submit">Assign Task</button>
    </form>
  );
}
