import React, { useState } from "react";
import SummaryCards from "../components/SummaryCards";
import FiltersBar from "../components/FiltersBar";
import MemberList from "../components/MemberList";
import SelectedMemberPanel from "../components/SelectedMemberPanel";
import TaskForm from "../components/TaskForm";
import { useSelector } from "react-redux";

function Dashboard() {
  const role = useSelector(state => state.role.currentRole);
  const members = useSelector(state => state.members.members);
  
  const [selectedMember, setSelectedMember] = useState(null);

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

          <MemberList onSelect={setSelectedMember} />
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
        <SelectedMemberPanel selectedMemberId={selectedMember} />


        {role === "lead" && (
          <>
            <h3 style={{ marginTop: "20px" }}>Assign New Task</h3>
            <TaskForm members={members} />
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
