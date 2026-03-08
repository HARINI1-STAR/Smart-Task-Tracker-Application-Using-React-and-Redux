import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/taskActions";

function AddTask() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim() === "") return;
        dispatch(addTask(text));
        setText("");
    };

    return (
        <div
            style={{
                display: "flex",
                gap: "10px",
                marginBottom: "25px",
            }}
        >
            <input
                type="text"
                placeholder="Enter your task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: "10px",
                    border: "none",
                    outline: "none",
                    fontSize: "16px",
                }}
            />
            <button
                onClick={handleAdd}
                style={{
                    padding: "12px 20px",
                    borderRadius: "10px",
                    border: "none",
                    background: "linear-gradient(45deg, #ff6b6b, #ff9f43)",
                    color: "#fff",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "0.3s",
                }}
            >
                Add
            </button>
        </div>
    );
}

export default AddTask;
