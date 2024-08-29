import { AddIcon } from "./Icons/AddIcon"
import { useState } from "react"

export function AddTask() {
    const [selectedOption, setSelectedOption] = useState("")

    const handleSelectOption = (event) => {
        if (event.target.value === "Trabajo" || event.target.value === "Personal" || event.target.value === "Estudio" || event.target.value === "Otro") {
            setSelectedOption(event.target.value)
        }
    }
    
    //Crear un Treset de tareas en el cual añadir cada tarea 

    return (
        <article className="flex flex-col mx-5 rounded border h-32 p-4 gap-2 border-gray-300">
            <input type="text" placeholder="New task..."
              className="h-10 border-gray-300 border rounded-md w-full px-2 py-4"/>

            <div className="flex flex-row">
                <input list="category" placeholder="Category" onChange={handleSelectOption}
                  className="h-10 text-black border-gray-300 border rounded-md w-full px-2 py-4"/>
                
                <datalist id="category">    
                    <option value="Trabajo"></option>
                    <option value="Personal"></option>
                    <option value="Estudio"></option>
                    <option value="Otro"></option>
                </datalist>   

                <button className="bg-black text-white flex flex-row ml-2 px-4 py-2 items-center rounded-md p-2 font-semibold">
                <AddIcon/>
                Add
                </button>
            </div>
        </article>
    )
}