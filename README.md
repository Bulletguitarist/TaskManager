# 🚀 Task Manager – Full Stack Web Application

A full-stack Task Management application built using **React, Node.js, Express, and MongoDB Atlas** with secure JWT authentication.  
Deployed on **Netlify (Frontend)** and **Render (Backend)**.

---

## 🌐 Live Demo

🔗 Frontend: https://jyotir.netlify.app  
🔗 Backend: https://taskmanager-3-5jup.onrender.com  

---

## 📌 Features

- ✅ User Registration & Login
- ✅ Secure Authentication using JWT
- ✅ Create, Read, Update, Delete (CRUD) Tasks
- ✅ Task Completion Toggle
- ✅ Protected Routes
- ✅ Responsive UI
- ✅ Production Deployment
- ✅ MongoDB Atlas Cloud Database

---

## 🛠 Tech Stack

### Frontend
- React.js
- Axios
- CSS (Custom Styling)
- React Router

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs
- CORS

### Deployment
- Netlify (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## 📂 Project Structure
TaskManager/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
├── frontend/
│ ├── public/
│ ├── src/
│ └── package.json
│
└── README.md

---

## ⚙️ Installation (Local Setup)

### 1️⃣ Clone Repository
git clone https://github.com/Bulletguitarist/TaskManager.git

cd TaskManager
---

### 2️⃣ Backend Setup
cd backend
npm install
Create `.env` file inside backend:


Start backend:
node server.js
### 3️⃣ Frontend Setup
cd frontend
npm install
npm start
---

## 🔐 Environment Variables

| Variable | Description |
|----------|------------|
| MONGO_URI | MongoDB Atlas connection string |
| JWT_SECRET | Secret key for JWT token signing |

---

## 📦 API Endpoints

### Auth Routes
- `POST /api/auth/register`
- `POST /api/auth/login`

### Task Routes
- `GET /api/tasks`
- `POST /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

---

## 🧠 What I Learned

- Full-stack architecture
- JWT authentication implementation
- REST API design
- MongoDB Atlas configuration
- Deployment debugging on Render & Netlify
- Environment variable handling
- Case-sensitive Linux deployment fixes

---

## ⭐ Future Improvements

- Task categories & priorities
- Role-based authentication
- Dark mode toggle
- Docker containerization
- CI/CD pipeline
---

## 🔐 Environment Variables

| Variable | Description |
|----------|------------|
| MONGO_URI | MongoDB Atlas connection string |
| JWT_SECRET | Secret key for JWT token signing |

---

## 📦 API Endpoints

### Auth Routes
- `POST /api/auth/register`
- `POST /api/auth/login`

### Task Routes
- `GET /api/tasks`
- `POST /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

---

## 🧠 What I Learned

- Full-stack architecture
- JWT authentication implementation
- REST API design
- MongoDB Atlas configuration
- Deployment debugging on Render & Netlify
- Environment variable handling
- Case-sensitive Linux deployment fixes

## ⭐ Future Improvements

- Task categories & priorities
- Role-based authentication
- Dark mode toggle
- Docker containerization
- CI/CD pipeline

## 👨‍💻 Author

**Jyotirmoy Mahapatra**    
GitHub: https://github.com/Bulletguitarist



