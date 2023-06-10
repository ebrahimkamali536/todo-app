import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
const CreateTask = ({ open, handleClose, createTask }) => {
  const [input, setInput] = useState({ name: "", description: "" });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      id: Math.floor(Math.random() * 1000),
      name: input.name,
      description: input.description,
    });
    setInput({ name: "", description: "" });
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
              Create
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateTask;
