import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text:"x Appointment",
    day: "Feb. 5",
    reminder: true
    },
    {
        id: 2,
        text:"y Appointment",
        day: "Feb. 6",
        reminder:true

    },
    {
      id: 3,
      text:"z Appointment",
      day: "Feb. 7",
      reminder: false
  }
]);

const addTask = (task)=>{
  const id = Math.floor(Math.random() * 10000 ) + 1;
  const newTask = {id, ...task};
  setTasks([...tasks, newTask]);
}

const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>{
    return(
      task.id !== id
    )
  }))
}

const toggleReminder = (id)=> {
  setTasks(
    tasks.map((task)=>{
     return (task.id === id ? {...task, reminder: !task.reminder} : task)
    })
  )
  
}
  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
       />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length >0 ?<Tasks 
      key={tasks.id}
      tasks={tasks} 
      onDelete={deleteTask}
      onToggle = {toggleReminder}
      />: "No Tasks Left"}
    </div>
    
  );
}

export default App;
