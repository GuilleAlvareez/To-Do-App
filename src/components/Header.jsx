export function Header({ isOpen, setIsOpen }) {

    const toggleButtonSideBar = () => {
      setIsOpen(!isOpen)
      console.log(isOpen)
    } 

    return (
    <header className=" fixed top-0 left-0 w-full z-10 bg-white shadow-lg flex flex-row gap-6 pl-5 h-16 items-center">
        <button onClick={toggleButtonSideBar} className="w-6 abs">
          <img className="w-full h-full" src="/public/sideBarIcon.svg" alt="SideBar"/>
        </button>

        <span className="text-xl font-bold text-primary">ToDoApp</span>
      </header>
    )
}
