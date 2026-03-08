import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../actions/taskActions";

function TaskList() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    return (
        <div
            style={{
                maxWidth: "600px",
                margin: "30px auto",
                padding: "20px",
                backgroundColor: "rgba(255,255,255,0.2)",
                color: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                fontFamily: "Segoe UI, sans-serif",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    marginBottom: "20px",
                    color: "#333",
                }}
            >
                Task List
            </h2>
            {tasks.length === 0 ? (
                <p style={{ textAlign: "center", color: "#777" }}>
                    No tasks available
                </p>
            ) : (
                tasks.map((task) => (
                    <div
                        key={task.id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "12px",
                            marginBottom: "10px",
                            backgroundColor: "#f9fafc",
                            borderRadius: "8px",
                            border: "1px solid #e5e7eb",
                        }}
                    >
                        <span
                            onClick={() => dispatch(toggleTask(task.id))}
                            style={{
                                textDecoration: task.completed ? "line-through" : "none",
                                cursor: "pointer",
                                color: task.completed ? "#9ca3af" : "#111827",
                                fontWeight: "500",
                            }}
                        >
                            {task.text}
                        </span>
                        <button
                            onClick={() => dispatch(deleteTask(task.id))}
                            style={{
                                padding: "6px 12px",
                                backgroundColor: "#ef4444",
                                color: "#fff",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer",
                                fontSize: "14px",
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default TaskList;
