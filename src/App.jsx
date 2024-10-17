import { Header } from "./components/Header"
import { useState, useContext, useEffect } from "react"
import { SideBar } from "./components/SideBar"
import { AddTask } from "./components/AddTask"
import { listTaskContext } from "./contexts/setOfTask"
import { CardTask } from "./components/CardTask" 
import { ResumeTask } from "./components/ResumeTask"
import { TaskForCategory } from "./components/TaskForCategory"

function App() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false)
  const { listTasks } = useContext(listTaskContext)
  const [renderedTasks, setRenderedTasks] = useState([])
  const [windowTasks, setWindowTasks] = useState(true)
  const [windowSummary, setWindowSummary] = useState(false)
  const posibleCategories = ["Personal", "Work", "School", "Other"]

  //ESTO VA A HACER QUE CADA VEZ QUE CAMBIE LA LISTA DE TAREAS SEPA LA APP CUALES RENDERIZAR 
  useEffect(() => {
    setRenderedTasks(Array.from(listTasks));
  }, [listTasks]);
  
  const handleSummary = () => {
    if (windowTasks) {
      setWindowTasks(false)
      setWindowSummary(true)
    } else {
      setWindowTasks(true)
      setWindowSummary(false)
      }
    }
  

  return (
    <div className="h-screen w-screen m-0 flex">
      <Header
        isOpen={isOpenSideBar}
        setIsOpen={setIsOpenSideBar}
      />

      <SideBar 
        isOpenSideBar={isOpenSideBar}
        handleSummary={handleSummary}
        windowTasks={windowTasks}
        windowSummary={windowSummary}
      />


      <aside className={`${windowTasks ? `${isOpenSideBar ? 'ml-[16.666667%] w-[calc(100%-16.666667%)] translate-x-0 duration-300' : 'ml-0 w-full translate-x-0 duration-300'} h-[calc(100%-4rem)] flex flex-col fixed top-16 overflow-auto` : 'hidden'}`}>
        <h1 className="font-bold text-4xl mx-5 my-6">My tasks</h1>

        <AddTask/>
        
        {
          renderedTasks.map((task, index) => {
            return (
              <CardTask
                key={index}
                task={task}
              />
            )
          })
        }
      </aside>

      <aside className={`${windowSummary ? `${isOpenSideBar ? 'ml-[16.666667%] w-[calc(100%-16.666667%)] translate-x-0 duration-300' : 'ml-0 w-full translate-x-0 duration-300'} h-[calc(100%-4rem)] flex flex-col fixed top-16 overflow-auto` : 'hidden'}`}>
        <h1 className="font-bold text-4xl mx-5 my-6">Summary</h1>

        <ResumeTask/>

        <h1 className="font-bold text-4xl mx-5 my-6">Category</h1>
          {
            posibleCategories.map((category) => {
              console.log(category)
              return (
                <TaskForCategory 
                  key={category} 
                  category={category}/>
                
              )
            })
          }
      </aside>

    </div>
  )
}

export default App
