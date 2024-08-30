import { AddIcon } from "./Icons/AddIcon"
import { useState, useContext } from "react"
import { Task } from "../objects/Task"
import { listTaskContext } from "../contexts/setOfTask.jsx"

export function AddTask() {
    const [nameTask, setNameTask] = useState("")
    const [categorySelected, setcategorySelected] = useState("")
    
    const changeNameTask = (event) => {
        setNameTask(event.target.value)
    }
    
    // CADA VEZ QUE CAMBIA EL VALOR DE CATEGORIA SE EJECUTA ESTA FUNCION
    const handleSelectOption = (event) => {
        if (event.target.value === "Trabajo" || event.target.value === "Personal" || event.target.value === "Estudio" || event.target.value === "Otro") {
            setcategorySelected(event.target.value)
        }
    }
    
    //CUANDO SE DA CLICK EN AÑADIR AÑADIMOS LA TAREA A UN SET DE TAREAS
    const handleAddTask = () => {
        const { addTask } = useContext(listTaskContext)
        const task = new Task(nameTask, categorySelected, false)
        addTask(task)
    }

    return (
        <article className="flex flex-col mx-5 rounded border notMobile:h-32 p-4 gap-2 border-gray-300">
            <input type="text" placeholder="New task..." onChange={changeNameTask}
              className="h-10 border-gray-300 border rounded-md w-full px-2 py-4"/>

            <div className="flex flex-col gap-2 notMobile:flex-row">
                <input list="category" placeholder="Category" onChange={handleSelectOption}
                  className="h-10 text-black border-gray-300 border rounded-md w-full px-2 py-4"/>
                
                <datalist id="category">    
                    <option value="Trabajo"></option>
                    <option value="Personal"></option>
                    <option value="Estudio"></option>
                    <option value="Otro"></option>
                </datalist>   

                <button onClick={handleAddTask} 
                    className="bg-black text-white flex flex-row ml-2 px-4 py-2 items-center rounded-md p-2 font-semibold">
                <AddIcon/>
                Add
                </button>
            </div>
        </article>
    )
}