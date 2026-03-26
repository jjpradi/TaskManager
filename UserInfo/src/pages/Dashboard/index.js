// pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api";
import UserTable from "../../components/UserTable";
import SearchBar from "../../components/SearchBar";

const Dashboard = () => {

  const [users, setUsers] = useState([]);
  
  const [filtered, setFiltered] = useState([]);
  
  const [search, setSearch] = useState("");
  
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setFiltered(data);
    });
  }, []);


  // Search
  useEffect(() => {
    const result = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, users]);

  // Sorting
  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...filtered].sort((a, b) => {
      const valA = key === "company" ? a.company.name : a[key];
      const valB = key === "company" ? b.company.name : b[key];

      return direction === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    });

    setFiltered(sorted);
    setSortConfig({ key, direction });
  };

  return (
    <div  className=""  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
      <h1>User Directory</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <UserTable users={filtered} sortData={sortData} />
    </div>
  );
};

export default Dashboard;