import React from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: "40px 20px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(15px)",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          color: "#fff",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          Redux Task Manager
        </h1>
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
