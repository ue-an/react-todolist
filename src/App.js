import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';
import { Form } from './components/Form';
import { FilterButton } from './components/FilterButtons';

function App(props) {
  //displays data in browser>inspect>console
  // console.log(props.tasks);
  const taskList = props.tasks?.map((task) => <Todo
  id={task.id}
  name={task.name}
  completed={task.completed}
  key={task.id}
  />);
  return (
    <div className='todoapp stack-large'>
      <h1>TodoMatic</h1>
      <Form />
      <FilterButton />
      <h2 id='list-heading'>3 tasks remaining</h2>
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
