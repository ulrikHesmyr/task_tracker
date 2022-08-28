import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {id:1,
    text:'Sende pakke m posten',
    day:'Feb 4th at 12:00pm',
reminder:true},
{id:2,
    text:'Ta klesvask',
    day:'Feb 5th at 2:30pm',
reminder:true},
{id:3,
    text:'Hente pappa på flyplassen',
    day:'Feb 7th at 3:00pm',
reminder:true}
])
const [showAddTask, setShowAddTask] = useState(false)

//Add task 
const addTask = (task) =>{
  const id = Math.floor(Math.random() * 100000)
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//Delete task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=>task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder } :task))
}


  return (
    <div className="container">
      <Header onAdd={()=>{setShowAddTask(!showAddTask)}} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to do'}
      
    </div>
  );
}

export default App;
