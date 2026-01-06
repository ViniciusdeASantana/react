import AddTask from "./componentes/AddTask";
import Tasks from "./componentes/tasks";

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-red-500">Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  )
}
export default App;