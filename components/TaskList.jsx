import React from 'react';

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks found</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div
          key={task.id}
          className={`task-item ${task.completed ? 'completed' : ''}`}
        >
          <div className="task-content">
            <button
              onClick={() => onToggleComplete(task.id)}
              className="toggle-btn"
              aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
            >
              {task.completed ? '✓' : '○'}
            </button>
            
            <div className="task-details">
              <h3>{task.title}</h3>
              {task.description && <p>{task.description}</p>}
              <span className="task-date">
                {new Date(task.createdAt).toLocaleDateString()}
              </span>
            </div>
            
            <button
              onClick={() => onDeleteTask(task.id)}
              className="delete-btn"
              aria-label="Delete task"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;