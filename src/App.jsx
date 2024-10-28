import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import SearchBar from '../components/SearchBar';
import ThemeToggle from '../components/ThemeToggle';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCompleted, setFilterCompleted] = useState('all');

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks
    .filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          task.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      if (filterCompleted === 'completed') return matchesSearch && task.completed;
      if (filterCompleted === 'active') return matchesSearch && !task.completed;
      return matchesSearch;
    });

  return (
    <div className="app">
      <div className="container">
        <div className="app-header">
          <h1>Task Manager</h1>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        
        <div className="main-content">
          <TaskForm onAddTask={addTask} />
          
          <div className="filters-section">
            <SearchBar 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery}
              filterCompleted={filterCompleted}
              setFilterCompleted={setFilterCompleted}
            />
          </div>

          <TaskList
            tasks={filteredTasks}
            onToggleComplete={toggleTaskCompletion}
            onDeleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;