import React, { useState } from 'react';
import Task from './Task';
import Form from './Form';
import '../../css/to-do/TaskList.css';

function TaskList() {

  const [tasks, setTask] = useState([]);

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const taskUpdated = [task, ...tasks];
      setTask(taskUpdated);
    }
  };

  const deleteTask = id => {
    const taskUpdated = tasks.filter(
      task => task.id !== id
    );
    setTask(taskUpdated);
  };

  const completeTask = id => {
    const taskUpdated = tasks.map(task => {
        if(task.id === id) {
          task.done = !task.done;
        }
        return task
    });
    setTask(taskUpdated);
  };

  return (
    <>
      <Form onSubmit={addTask} />
      <div className='task-list'>
        {
          tasks.map((task) =>
            <Task 
              key={task.id} 
              id={task.id} 
              text={task.text} 
              done={task.done}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          )
        }
      </div>
    </>
  );
}

export default TaskList;