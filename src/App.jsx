import { useState, useRef, useEffect } from 'react';
import './App.css';
import Task from './Task/Task';


function App() {
  //Variable pour Clear L'input
  const ref = useRef(null)
  const [taskList, setTaskList] = useState([]);
  const [status, setstatus] = useState([{ status: "A faire" }, { status: "En Cours" }, { status: "Terminé" }])
  const [newTask, setNewTask] = useState();


  function New(e) {
    setNewTask(e.target.value);
  };
  //Fonction Supprimer
  function Deletetask(id) {
    //Copie du tableau
    const taskCopy = [...taskList];
    taskCopy.splice(id, 1);
    setTaskList(taskCopy);
  };
  //"Pousser" dans le Tableau taskList, la Variable newTask
  const AddTask = () => {
    setTaskList(taskList => [newTask, ...taskList]);
    console.log(taskList);
    console.log(newTask);
    //Action de Clear L'input
    ref.current.value = "";
  }
  //Affichage du Tableau avec la Boucle MAP
  const RenderMyTask = () => {
    return taskList.map((item, id) => {
      return (
        <div >
          <Task key={id} item={item} />
          <button id={id}>status</button>
          <button id={id} onClick={() => Deletetask(id)}>Supprimer</button>
        </div>
      );
    }
    );
  }
  return (
    <>
      <div>
        <div>
          <h1>La To-Do-Liste</h1>
        </div>
        <div className="button">
          <input type="text" ref={ref} onChange={New} placeholder="Indiquez la tâche à ajouter ici"></input>
          <button onClick={AddTask}>Valider la tâche</button>
        </div>
        <div>
          {RenderMyTask()}
        </div>
      </div>
    </>
  )
}

export default App
