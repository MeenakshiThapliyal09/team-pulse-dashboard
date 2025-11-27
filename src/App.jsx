import { useState } from 'react'
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import './App.css'



function App() {
  const currentRole = useSelector(state => state.role.currentRole);
  const currentUser = useSelector(state => state.role.currentUser);
  const members = useSelector(state => state.members.members);

  return (
    <>
    <Sidebar />
    <Header />
    <Dashboard />
    </>
  );

}

export default App


