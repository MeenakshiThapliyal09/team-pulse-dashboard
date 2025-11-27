import React from "react";
import { useSelector } from "react-redux";
import TaskList from "./TaskList";

export default function SelectedMemberPanel({ selectedMemberId }) {
  const members = useSelector(state => state.members.members);

  const member = members.find(m => m.id === selectedMemberId);

  if (!member) {
    return (
      <div>
        <h3>Selected Member</h3>
        <p>No member selected.</p>
      </div>
    );
  }

  return (
    <div>
      <h3>{member.name}</h3>
      <p>Status: {member.status}</p>

      <h4>Tasks</h4>
      <TaskList memberId={member.id} />
    </div>
  );
}
