import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import TodoCard from "./TodoCard";
import CreateTask from "../modals/CreateTask";

const TodoList = () => {
  const [taskList, setTaskList] = useState([]);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({ name: "", description: "" });
  const handleClose = () => {
    setOpen(!open);
  };
  useEffect(() => {
    let arr = localStorage.getItem("taskList")
    if(arr) {
        let obj = JSON.parse(arr)
        setTaskList(obj)
    }
  }, [])

  const createTask = (taskObj) => {
    let addToTaskList = taskList;
    addToTaskList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(addToTaskList))
    setTaskList(addToTaskList);
    setOpen(false);
  };

  const deleteTodo = (id) => {
    const newTaskList = taskList.filter((todo) => todo.id !== id);
    localStorage.setItem("taskList", JSON.stringify(newTaskList))
    setTaskList(newTaskList);
  };

  const updateTaskList = (index, obj) => {
    let newTaskList = taskList
    newTaskList[index] = obj
    localStorage.setItem("taskList", JSON.stringify(newTaskList))
    setTaskList(newTaskList)
    window.location.reload()
  };

  return (
    <Box>
      <Box>
        <Typography>Todo List</Typography>
        <Button variant="contained" onClick={handleClose}>
          Create new Task
        </Button>
      </Box>
      <Box>
        {taskList.map((task, index) => (
          <TodoCard
            key={task.id}
            task={task}
            deleteTodo={deleteTodo}
            updateTaskList={updateTaskList}
            index={index}
          />
        ))}
      </Box>

      <CreateTask
        open={open}
        handleClose={handleClose}
        createTask={createTask}
      />
    </Box>
  );
};

export default TodoList;
