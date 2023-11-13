// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import Title from './components/Title';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
      filterTasks(statusFilter, response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [statusFilter]);

  const addTask = async (task) => {
    try {
      await axios.post('http://localhost:5000/api/tasks', task);
      fetchTasks();  // Refetch tasks after adding
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask);
      // Update the state with the response from the API
      setTasks((prevTasks) => prevTasks.map((task) => (task._id === id ? response.data : task)));
      // Use the updated state to filter tasks
      filterTasks(statusFilter, tasks.map((task) => (task._id === id ? response.data : task)));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
  

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      filterTasks(statusFilter, tasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const filterTasks = (status, allTasks = []) => {
    setStatusFilter(status);
    if (status === 'All') {
      setFilteredTasks(allTasks);
    } else {
      setFilteredTasks(allTasks.filter((task) => task.status === status));
    }
  };

  return (
    <div>
      <Title />
      <TaskForm addTask={addTask} />
      <TaskList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
      <Filter filterTasks={filterTasks} />
    </div>
  );
};

export default App;
