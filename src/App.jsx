import { Header } from "./components/Header"
import { useState } from "react"
import { SideBar } from "./components/SideBar"
import { AddTask } from "./components/AddTask"

function App() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false)

  return (
    <div className="h-screen w-screen m-0">
      <Header
        isOpen={isOpenSideBar}
        setIsOpen={setIsOpenSideBar}
      />

      <SideBar 
        isOpenSideBar={isOpenSideBar}
      />

      <aside className={`${isOpenSideBar ? 'w-[calc(100%-16.666667%)] translate-x-[20%] duration-300' : ''} h-[calc(100%-4rem)] w-full flex flex-col fixed top-16`}>
        <h1 className="font-bold text-4xl mx-5 my-6">My tasks</h1>

        <AddTask/>
        
      </aside>

    </div>
  )
}

export default App
