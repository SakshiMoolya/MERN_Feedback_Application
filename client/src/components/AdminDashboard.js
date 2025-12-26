import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/dashboard.css";

function AdminDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/feedback")
      .then(res => setFeedbacks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>

      {feedbacks.map(f => (
        <div className="card" key={f._id}>
          <p><b>Visit:</b> {f.visitFrequency}</p>
          <p><b>Food:</b> {f.foodQuality} ⭐</p>
          <p><b>Service:</b> {f.serviceQuality} ⭐</p>
          <p><b>Overall:</b> {f.overallExperience} ⭐</p>
          <p><b>Recommend:</b> {f.recommend}</p>
          <p><b>Suggestions:</b> {f.suggestions || "N/A"}</p>
          <p><b>Follow Up:</b> {f.followUp ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
