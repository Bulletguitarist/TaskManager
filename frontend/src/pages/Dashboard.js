import React, { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

function Dashboard() {

  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: ""
  });

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/tasks", form);
      setForm({ title: "", description: "" });
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const toggleStatus = async (task) => {
    try {
      await API.put(`/tasks/${task._id}`, {
        status: task.status === "pending" ? "completed" : "pending"
      });

      if (task.status === "pending") {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      }

      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true;
    return task.status === filter;
  });

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>

      {/* Floating Emojis */}
      <div className="floating one">🚀</div>
      <div className="floating two">✨</div>
      <div className="floating three"></div>

      <h2>🚀 My Task Universe</h2>

      <div className="top-bar">
        <button onClick={handleLogout} className="btn-dark">
          Logout
        </button>

        <button onClick={() => setDarkMode(!darkMode)} className="btn-dark">
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Add Task */}
      <form onSubmit={handleSubmit} className="form-section">
        <input
          name="title"
          placeholder="🌟 Task Title"
          value={form.title}
          onChange={handleChange}
          className="input-style"
          required
        />

        <input
          name="description"
          placeholder="📝 Task Description"
          value={form.description}
          onChange={handleChange}
          className="input-style"
          required
        />

        <button type="submit" className="btn-add">
          ➕ Add Task
        </button>
      </form>

      {/* Filter */}
      <div className="filter-bar">
        <button onClick={() => setFilter("all")} className="btn-filter">All</button>
        <button onClick={() => setFilter("pending")} className="btn-filter">Pending</button>
        <button onClick={() => setFilter("completed")} className="btn-filter">Completed</button>
      </div>

      {/* Task List */}
      {filteredTasks.map(task => (
        <div
          key={task._id}
          className={`task-card task-card-hover ${task.status}`}
        >
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p><strong>Status:</strong> {task.status}</p>

          <div className="task-actions">
            <button onClick={() => toggleStatus(task)} className="btn-complete">
              {task.status === "pending" ? "✅ Complete" : "↩ Undo"}
            </button>

            <button onClick={() => handleDelete(task._id)} className="btn-delete">
              ❌ Delete
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Dashboard;
