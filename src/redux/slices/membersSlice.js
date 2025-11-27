import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  members: [
    {
      id: 1,
      name: "Meenakshi",
      status: "Working",
      tasks: []
    },
    {
      id: 2,
      name: "Alice",
      status: "Break",
      tasks: []
    },
    {
      id: 3,
      name: "Bob",
      status: "Meeting",
      tasks: []
    },
    {
      id: 4,
      name: "Charlie",
      status: "Offline",
      tasks: []
    }
  ],

  ui: {
    filterStatus: "All",     
    sortBy: "name"           
  }
};

const membersSlice = createSlice({
  name: "members",
  initialState,

  reducers: {
    updateMemberStatus(state, action) {
      const { memberId, status } = action.payload;
      const m = state.members.find(x => x.id === memberId);
      if (m) m.status = status;
    },

    assignTask(state, action) {
      const { memberId, title, dueDate } = action.payload;
      const m = state.members.find(x => x.id === memberId);

      if (m) {
        m.tasks.push({
          id: Date.now(),     
          title,
          dueDate,
          progress: 0,
          completed: false
        });
      }
    },

   
    updateTaskProgress(state, action) {
      const { memberId, taskId, delta } = action.payload;

      const m = state.members.find(x => x.id === memberId);
      if (!m) return;

      const t = m.tasks.find(task => task.id === taskId);
      if (!t) return;

      let newValue = t.progress + delta;

      if (newValue > 100) newValue = 100;
      if (newValue < 0) newValue = 0;

      t.progress = newValue;
      t.completed = newValue === 100;
    },

    setFilterStatus(state, action) {
      state.ui.filterStatus = action.payload;
    },

    setSortBy(state, action) {
      state.ui.sortBy = action.payload;
    }
  }
});

export const {
  updateMemberStatus,
  assignTask,
  updateTaskProgress,
  setFilterStatus,
  setSortBy
} = membersSlice.actions;

export default membersSlice.reducer;
