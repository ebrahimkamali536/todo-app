import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EditTask from "../modals/EditTask";

const TodoCard = ({ task, deleteTodo, updateTaskList, index }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  const colors = [
    {
      primaryColor: "rgb(77, 226, 72)",
      secondaryColor: "rgba(77, 226, 72, 0.315)",
    },
    {
      primaryColor: "rgb(255, 210, 60)",
      secondaryColor: "rgba(255, 209, 60, 0.619)",
    },
    {
      primaryColor: "#5D93E1",
      secondaryColor: "rgba(58, 104, 255, 0.301)",
    },
    {
      primaryColor: "rgb(255, 57, 57)",
      secondaryColor: "rgba(255, 57, 57, 0.424)",
    },
    {
      primaryColor: "rgb(135, 60, 255)",
      secondaryColor: "rgb(135, 60, 255, 0.424)",
    },
    {
      primaryColor: "rgb(255, 85, 43)",
      secondaryColor: "rgb(255, 85, 43, 0.424)",
    },
  ];

  const updateTask = (obj) => {
    updateTaskList(index, obj)
  }

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {task.name}
          </Typography>
          <Typography variant="body2">{task.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClose}>
            Edit
          </Button>
          <Button size="small" onClick={() => deleteTodo(task.idt )}>
            Delete
          </Button>
        </CardActions>
      </Card>
      <EditTask open={open} handleClose={handleClose} updateTask={updateTask} task={task} />
    </>
  );
};

export default TodoCard;
