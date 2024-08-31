import { Header } from "./components/Header"
import { useState, useContext } from "react"
import { SideBar } from "./components/SideBar"
import { AddTask } from "./components/AddTask"
import { listTaskContext } from "./contexts/setOfTask"
import { CardTask } from "./components/CardTask" 

function App() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false)
  const { listTasks } = useContext(listTaskContext)

  return (
    <div className="h-screen w-screen m-0 flex">
      <Header
        isOpen={isOpenSideBar}
        setIsOpen={setIsOpenSideBar}
      />

      <SideBar 
        isOpenSideBar={isOpenSideBar}
      />


      <aside className={`${isOpenSideBar ? 'ml-[16.666667%] w-[calc(100%-16.666667%)] translate-x-0 duration-300' : 'ml-0 w-full translate-x-0 duration-300'} h-[calc(100%-4rem)] flex flex-col fixed top-16`}>
          <h1 className="font-bold text-4xl mx-5 my-6">My tasks</h1>

        <AddTask/>
        
        
        {
          Array.from(listTasks).map((task, index) => {
            return (
              <CardTask
                key={index}
                task={task}
              />
            )
          })
        }
      </aside>

    </div>
  )
}

export default App
