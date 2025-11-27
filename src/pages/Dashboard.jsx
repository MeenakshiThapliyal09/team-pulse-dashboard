import React, { useState } from "react";
import SummaryCards from "../components/SummaryCards";
import FiltersBar from "../components/FiltersBar";
import MemberList from "../components/MemberList";
import StatusSelector from "../components/StatusSelector";
import SelectedMemberPanel from "../components/SelectedMemberPanel";
import TaskForm from "../components/TaskForm";
import { useSelector } from "react-redux";

function Dashboard() {
  // Redux state
  const role = useSelector(state => state.role.currentRole);
  const members = useSelector(state => state.members.members);
  const currentUser = useSelector(state => state.role.currentUser);

  // Find the logged-in member
  const currentMember = members.find(m => m.name === currentUser);

  // Selected member from the list
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

          {/* Member list that updates the selected member */}
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
        {/* Status selector only for members */}
        {role === "member" && currentMember && (
          <>
            <h3>Your Status</h3>
            <StatusSelector userId={currentMember.id} />
            <hr style={{ margin: "20px 0" }} />
          </>
        )}

        {/* Selected member details + task list */}
        <SelectedMemberPanel selectedMemberId={selectedMember} />

        {/* Task Form only for Team Lead */}
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
