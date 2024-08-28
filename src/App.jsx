import { Header } from "./components/Header"
import { useState } from "react"
import { SideBar } from "./components/SideBar"

function App() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false)
  const [isOpenResume, setIsOpenResume] = useState(false)

  return (
    <div className="h-screen w-screen m-0">
      <Header
        isOpen={isOpenSideBar}
        setIsOpen={setIsOpenSideBar}
      />
      
      <SideBar 
        isOpenSideBar={isOpenSideBar}
        
      />

    </div>
  )
}

export default App
