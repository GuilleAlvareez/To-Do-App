import ResumeIcon from "./Icons/ResumeIcon";
import TrashIcon from './Icons/TrashIcon';
import { useState } from "react";

export function SideBar({ isOpenSideBar }) {
    //HACER LOS STILOS DE CADA BOTON DE LA LISTA Y SOMBRAS
    //A LA DERECHA DE LA SIDEBAR
    const [isOpenTask, setIsOpenTask] = useState(false)

    return (
    <aside className={`bg-white shadow-X-xs  h-[calc(100%-4rem)] notMobile:w-2/12 w-full fixed top-16 left-0 z-10 transform ${isOpenSideBar ? 'translate-x-0' : '-translate-x-full'} transition-all
                        ${isOpenSideBar ? 'ease-out' : 'ease-in'} duration-300`}>
        <div className="h-full mx-4 mt-3">

          <button 
            className="flex flex-row w-full h-10 mb-4 px-4 py-2 justify-left items-center rounded transition-all duration-300 ease-in-out hover:bg-gray-100"  
          >
            <ResumeIcon isOpenTask={isOpenTask}/>
            Resumen
          </button>

          <button 
            className="flex flex-row w-full h-10 mb-4 px-4 py-2 justify-start items-center rounded transition-all duration-300 ease-in-out hover:bg-gray-100"  
          >
            <TrashIcon isOpenTask={isOpenTask}/>
            Tareas
          </button>

        </div>
    </aside>
    )
}