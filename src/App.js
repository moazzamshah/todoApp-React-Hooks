import React from 'react';
import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import './styles/index.css';
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 2:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 3:30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 7th at 4:30',
      reminder: false,
    },
  ]);

  //Add tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // Deleting task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //  Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show Add New ↗️'
      )}
    </div>
  );
};

export default App;
