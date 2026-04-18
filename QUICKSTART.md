# Hostel Management Portal - Quick Start Guide

Welcome! Here is the quickest way to start the servers and manage the project.

## 🚀 How to Start the Project

1. Open your Terminal in this project's master folder (`Hostel-Management-master`).
2. If this is your very first time, make sure to install all packages by running:
   ```bash
   npm install
   npm run heroku-postbuild
   ```
3. **To start the project immediately:**
   ```bash
   npm run dev
   ```
*(This single command automatically starts the Backend Server on Port 5001 and the Frontend React Application simultaneously, thanks to the `concurrently` package.)*

## 🔑 Default Admin Account

If no admin account exists in your Database, the server will **automatically create one** when it starts up. You can log in using these details:

- **Email ID:** `admin@example.com`
- **Password:** `password123`

## 🗄️ Database (DBMS) Details

- The project uses your local MongoDB connection (`mongodb://localhost:27017/hostel`).
- **Smart Fallback:** If your machine doesn't have MongoDB installed, do not worry! The backend will automatically detect this and spin up an *In-Memory Database* gracefully without crashing.
- As an Admin, you can perfectly access **Add Student, Attendance, Profile, and Analysis** flows.

## 🐛 Troubleshooting

- **Server Crashing?** Make sure no other app is occupying port `5001` or your frontend React port (`3000`/`5173`).
- **Profile Page Error / Unknown Errors?** If your local Memory Server restarts, your old logged-in token stays in your browser but the user deletes from the memory DB. Simply **Logout and Login again** to fix it.
