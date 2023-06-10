import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
const EditTask = ({ open, handleClose, updateTask, task }) => {
  const [input, setInput] = useState({ name: "", description: "" });

  useEffect(() => {
    setInput({ name: task.name, description: task.description });
  }, []);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let editTask = {}
    editTask.name = input.name
    editTask.description = input.description
    editTask.id = task.id
    updateTask(editTask)
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ padding: "20px", backgroundColor: "#fff" }}>
        <h2>Modal Title</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={input.name}
            onChange={inputHandler}
            fullWidth
            name="name"
          />
          <TextField
            label="Description"
            value={input.description}
            onChange={inputHandler}
            fullWidth
            name="description"
          />
          <Box>
            <Button type="submit" variant="contained" color="primary">
              Edit
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default EditTask;
