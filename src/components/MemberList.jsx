import React from "react";
import { useSelector } from "react-redux";
import MemberCard from "./MemberCard";

export default function MemberList() {
  const members = useSelector(state => state.members.members);
  const ui = useSelector(state => state.members.ui);

  const filtered = members.filter(m => {
    if (ui.filterStatus === "All") return true;
    return m.status === ui.filterStatus;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (ui.sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (ui.sortBy === "activeTasks") {
      const aActive = a.tasks.filter(t => !t.completed).length;
      const bActive = b.tasks.filter(t => !t.completed).length;
      return bActive - aActive;
    }
    return 0;
  });

  return (
    <div>
      {sorted.map(member => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}
