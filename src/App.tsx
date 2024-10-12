import { useState } from 'react'
import Form from './components/Form'
import TaskPart from './components/TaskPart'

interface Task {
  id: number
  name: string
  isChecked: boolean
}
function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (taskName: string) => {
    const newTask = {
      name: taskName,
      isChecked: false,
      id: tasks.length + 1,
    }
    setTasks([...tasks, newTask])
  }

  const toggleCheck = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isChecked: !task.isChecked } : task))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  const editTask = (id: number, newName: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, name: newName } : task))
  }
  const countNotDone = tasks.filter(task => !task.isChecked).length
  const countDone = tasks.filter(task => task.isChecked).length

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex justify-center lg:items-end items-center ">
      <div className="bg-white p-6 w-full sm:w-auto sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] rounded-3xl lg:mb-[20%]">
        <div className="flex justify-between gap-5">
          <p className="">
            Done:
            {' '}
            {countDone}
          </p>
          <p className="">
            Not done:
            {' '}
            {countNotDone}
          </p>
        </div>
        <div className={tasks.length ? 'mb-7' : ''}>
          {tasks.map(task => (
            <TaskPart
              key={task.id}
              name={task.name}
              isChecked={task.isChecked}
              toggleCheck={() => toggleCheck(task.id)}
              deleteTask={() => deleteTask(task.id)}
              editTask={newName => editTask(task.id, newName)}
            />
          ))}
        </div>
        <Form addTask={addTask} />
      </div>
    </div>
  )
}

export default App
