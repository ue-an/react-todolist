import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';
import { Form } from './components/Form';
import { FilterButton } from './components/FilterButtons';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const addTask = name => {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false};
    setTasks([...tasks, newTask]);
  }

  const toggleTaskCompleted = id => {
    const updatedTasks = tasks.map((task) => {
      //if this task has the same ID as the edited task
      if(id === task.id){
        //use object spread to make a new object
        //whose 'completed' prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  //displays data in browser>inspect>console
  // console.log(props.tasks);
  const taskList = tasks?.map((task) => (
  <Todo
  id={task.id}
  name={task.name}
  completed={task.completed}
  key={task.id}
  toggleTaskCompleted={toggleTaskCompleted}
  />));
  const filterbtnsList = props.filterbtns?.map((filterbtn) => (
  <FilterButton
  label={filterbtn.label}
  pressed={filterbtn.pressed}
  id={filterbtn.id}
  key={filterbtn.id}
  />));

  let taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
  let headingText = `${taskList.length} ${taskNoun} remaining`;

  return (
    <div className='todoapp stack-large'>
      <h1>TodoMatic</h1>

      <Form
      addTask={addTask}
       />

      <div className='filters btn-group stack-exception'>
        {/* <FilterButton label="all" pressed="true"/>
        <FilterButton label="active" pressed="false"/>
        <FilterButton label="completed" pressed="false"/> */}
        {filterbtnsList}
      </div>
      <h2 id='list-heading'>{ headingText }</h2>
      <ul role="list"
      className='todo-list stack-large stack-exception'
      aria-labelledby='list-heading'
      >
      {taskList}
      </ul>
    </div>
  );
  
}

export default App;
