import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterStatus, setSortBy } from "../redux/slices/membersSlice";

export default function FiltersBar() {
  const dispatch = useDispatch();
  const ui = useSelector(state => state.members.ui);

  return (
    <div style={{
      display: "flex",
      gap: "12px",
      marginBottom: "20px"
    }}>

      <select
        value={ui.filterStatus}
        onChange={(e) => dispatch(setFilterStatus(e.target.value))}
        style={{ padding: "6px", borderRadius: "6px" }}
      >
        <option value="All">All</option>
        <option value="Working">Working</option>
        <option value="Break">Break</option>
        <option value="Meeting">Meeting</option>
        <option value="Offline">Offline</option>
      </select>


      <select
        value={ui.sortBy}
        onChange={(e) => dispatch(setSortBy(e.target.value))}
        style={{ padding: "6px", borderRadius: "6px" }}
      >
        <option value="name">Sort by Name</option>
        <option value="activeTasks">Sort by Active Tasks</option>
      </select>
    </div>
  );
}
