# MERN Feedback Application

A full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) for collecting and managing customer feedback for restaurants.

## Features

### Customer Feedback Collection
- **Visit Frequency**: Track how often customers visit the restaurant
- **Food Quality Rating**: Rate food quality on a scale
- **Service Quality Rating**: Rate service quality on a scale
- **Overall Experience Rating**: Overall experience rating
- **Recommendation**: Whether customers would recommend the restaurant
- **Suggestions**: Optional text field for additional feedback
- **Follow-up Option**: Checkbox for follow-up contact

### Admin Dashboard
- View all submitted feedback in chronological order
- Real-time feedback management
- Responsive design for easy access

## Tech Stack

### Frontend (Client)
- **React**: 19.2.3 - Modern JavaScript library for building user interfaces
- **React Router DOM**: 7.11.0 - Declarative routing for React
- **Axios**: 1.13.2 - HTTP client for API requests
- **React Testing Library**: For component testing
- **CSS**: Custom styling for forms and dashboard

### Backend (Server)
- **Node.js** with **Express.js**: 5.2.1 - Web application framework
- **MongoDB** with **Mongoose**: 9.0.2 - NoSQL database and ODM
- **CORS**: 2.8.5 - Cross-origin resource sharing
- **Dotenv**: 17.2.3 - Environment variable management
- **Nodemon**: 3.1.11 - Development dependency for auto-restarting server

## Project Structure

```
feedback-mern-app/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── AdminDashboard.js
│   │   │   └── FeedbackForm.js
│   │   ├── styles/        # CSS stylesheets
│   │   │   ├── dashboard.css
│   │   │   └── form.css
│   │   ├── App.js         # Main React component
│   │   └── index.js       # React entry point
│   └── package.json
├── server/                 # Express backend
│   ├── models/
│   │   └── Feedback.js    # MongoDB schema
│   ├── routes/
│   │   └── feedbackRoutes.js # API routes
│   ├── index.js           # Server entry point
│   └── package.json
└── README.md
```

## API Endpoints

### POST /api/feedback
Submit new feedback
- **Request Body**: Feedback object with all required fields
- **Response**: Success message or error

### GET /api/feedback
Retrieve all feedback entries
- **Response**: Array of feedback objects sorted by creation date (newest first)

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/feedback-app
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```
   Or for development with auto-restart:
   ```bash
   npx nodemon index.js
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## Usage

1. **Customer Feedback**: Visit the main page to submit feedback using the feedback form
2. **Admin Dashboard**: Access the admin dashboard to view all submitted feedback
3. **Real-time Updates**: Feedback is stored in MongoDB and can be retrieved instantly

## Database Schema

The Feedback model includes the following fields:
- `visitFrequency`: String (required)
- `foodQuality`: Number (required)
- `serviceQuality`: Number (required)
- `overallExperience`: Number (required)
- `recommend`: String (enum: "Yes", "No") (required)
- `suggestions`: String (optional)
- `followUp`: Boolean (default: false)
- `createdAt`: Timestamp (auto-generated)
- `updatedAt`: Timestamp (auto-generated)

## Screenshots

# Frontend
Feedback Form
<img width="1913" height="1067" alt="image" src="https://github.com/user-attachments/assets/e2f156d7-272f-4a2d-929a-c5bb99d2fc7e" />
<img width="814" height="1014" alt="image" src="https://github.com/user-attachments/assets/2b6ec6ab-4219-4171-9f26-e0d237ae2ebf" />
Admin Dashboard
<img width="1911" height="670" alt="image" src="https://github.com/user-attachments/assets/bce55eb4-e913-4533-9162-0aad45566b21" />
<img width="888" height="631" alt="image" src="https://github.com/user-attachments/assets/93a397e3-25cb-4d77-9e62-f07c754a7518" />

# Backend
Database
<img width="888" height="631" alt="image" src="https://github.com/user-attachments/assets/7bf27c92-f701-435e-8afb-f37693b5b3db" />

