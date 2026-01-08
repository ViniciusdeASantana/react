import { useState } from "react";
import AddTask from "./componentes/AddTask";
import Tasks from "./componentes/tasks";

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Estudar programação",
    description: "Estudar programação para se tornar um desenvolvedor full stack.",
    isCompleted: false
  }])

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
    <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks />
      </div>
    </div>
  )
}
export default App;