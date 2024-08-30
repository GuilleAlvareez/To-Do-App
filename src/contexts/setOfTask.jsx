import { createContext, useState } from "react";

export const listTaskContext = createContext()

export function ListTaskProvider({ children }) {
    const [listTasks, setListTasks] = useState(new Set())

    const addTask = (task) => {
        setListTasks(prevlistTask => {
            const updateTaskList = new Set(prevlistTask)
            updateTaskList.add(task)
            return updateTaskList
        })
    }

    return (
        <listTaskContext.Provider value={{
            listTasks: listTasks,
            addTask
        }}>
            {children}
        </listTaskContext.Provider>
    )
}