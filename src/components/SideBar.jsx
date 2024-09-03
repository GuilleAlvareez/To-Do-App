import { ResumeIcon, TrashIcon } from './Icons.jsx'
import { useState } from "react";

export function SideBar({ isOpenSideBar, handleSummary, windowTasks, windowSummary }) {

    const handleTasksButton = () => {
      handleSummary()
    }

    const handleResumeButton = () => {
      handleSummary()
    }

    return (
    <aside className={`bg-white shadow-X-xs  h-[calc(100%-4rem)] notMobile:w-2/12 w-full fixed top-16 left-0 z-10 transform ${isOpenSideBar ? 'translate-x-0' : '-translate-x-full'} transition-all
                        ${isOpenSideBar ? 'ease-out' : 'ease-in'} duration-300`}>
        <div className="h-full mx-4 mt-3">

          <button 
            className={`flex flex-row w-full h-10 mb-4 px-4 py-2 justify-left items-center rounded transition-all duration-300 ease-in-out ${windowSummary ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
            onClick={handleResumeButton}
          >
            <ResumeIcon windowSummary={windowSummary}/>
            Summary
          </button>

          <button 
            className={`flex flex-row w-full h-10 mb-4 px-4 py-2 justify-start items-center rounded transition-all duration-300 ease-in-out ${windowTasks ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
            onClick={handleTasksButton}
          >
            <TrashIcon windowTasks={windowTasks}/>
            Tareas
          </button>

        </div>
    </aside>
    )
}