// pages/UserDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUsers } from "../../services/api";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUsers().then((data) => {
      const found = data.find((u) => u.id === parseInt(id));
      setUser(found);
    });
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div   style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}     >
      <h2>{user.name}</h2>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Website:</b> {user.website}</p>
      <p><b>Company:</b> {user.company.name}</p>
      <p><b>Address:</b> {user.address.street}, {user.address.city}</p>
    </div>
  );
};

export default UserDetail