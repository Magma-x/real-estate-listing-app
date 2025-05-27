// AgentsPage.jsx
import React, { useEffect, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import "./agent.css";
import Footer from "../footer/Footer";
const AgentsPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await apiRequest.get("/users");
        console.log("Fetched users:", response.data); // Debug
        setUsers(response.data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.response?.data?.message || "Failed to fetch users!");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
   <>
   <div className="user-list-container">
      <h1>Agents List</h1>
      <div className="user-grid">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="user-card">
              <img
                src={user.avatar || "https://via.placeholder.com/150"}
                alt={`${user.username}'s avatar`}
                className="user-avatar"
              />
              <h2>{user.username}</h2>
              <p>{user.email}</p>
            </div>
          ))
        ) : (
          <p>No agents found.</p>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AgentsPage;