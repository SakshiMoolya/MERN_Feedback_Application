import { useState } from "react";
import axios from "axios";
import "../styles/form.css";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    visitFrequency: "",
    foodQuality: 0,
    serviceQuality: 0,
    overallExperience: 0,
    recommend: "",
    suggestions: "",
    followUp: false,
  });

  const handleStarClick = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      await axios.post("http://localhost:5000/api/feedback", formData);
      alert("Feedback submitted successfully");
      setFormData({
        visitFrequency: "",
        foodQuality: 0,
        serviceQuality: 0,
        overallExperience: 0,
        recommend: "",
        suggestions: "",
        followUp: false,
      });
    } 
    catch (err) 
    {
      console.log(err);
      alert("Error submitting feedback");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <img src="/logo.png" alt="Uniwell Logo" className="logo"/>
        <img src="/restaurant.avif" alt="Restaurant" className="banner"/>
        <h2>HELLO, THANKS FOR VISITING</h2>
        <p className="subtitle">
          Please help us improve our cafe services by filling in our feedback form. Thank you!
        </p>

        <form onSubmit={handleSubmit}>
          <label>HOW OFTEN DO YOU VISIT HERE?</label>
          <select value={formData.visitFrequency} onChange={(e) =>
              setFormData({ ...formData, visitFrequency: e.target.value })
            } required>
            <option value="">Select</option>
            <option>Regularly</option>
            <option>Occasionally</option>
            <option>First Time</option>
          </select>

          {[
            ["QUALITY OF THE FOOD", "foodQuality"],
            ["SERVICE QUALITY", "serviceQuality"],
            ["OVERALL EXPERIENCE", "overallExperience"],
          ].map(([label, field]) => (
            <div key={field}>
              <label>{label}</label>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span
                    key={num}
                    className={
                      num <= formData[field] ? "star filled" : "star"
                    }
                    onClick={() => handleStarClick(field, num)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}

          <label>WOULD YOU RECOMMEND OUR RESTAURANT TO OTHERS?</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="recommend" value="Yes" onChange={(e) =>
                  setFormData({ ...formData, recommend: e.target.value })
                } required/>
              YES
            </label>
            <label>
              <input type="radio" name="recommend" value="No"
                onChange={(e) =>
                  setFormData({ ...formData, recommend: e.target.value })
                }/>
              NO
            </label>
          </div>

          <label>YOUR SUGGESTIONS TO IMPROVE</label>
          <textarea placeholder="Write here..." value={formData.suggestions}
            onChange={(e) =>
              setFormData({ ...formData, suggestions: e.target.value })
            }></textarea>

          <div className="checkbox">
            <input type="checkbox"
              checked={formData.followUp}
              onChange={(e) =>
                setFormData({ ...formData, followUp: e.target.checked })
              }
            />
            <span>RECEIVE PERSONAL FOLLOW UP TO YOUR FEEDBACK</span>
          </div>

          <button type="submit">SUBMIT FEEDBACK</button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
