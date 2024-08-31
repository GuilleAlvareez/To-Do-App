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

    const updateTask = (task) => {
        setListTasks(prevlistTask => {
            const updateTaskList = new Set(prevlistTask)
            updateTaskList.delete(task)
            updateTaskList.add(task)
            return updateTaskList
        })
    }

    return (
        <listTaskContext.Provider value={{
            listTasks: Array.from(listTasks).reverse(),
            addTask,
            updateTask
        }}>
            {children}
        </listTaskContext.Provider>
    )
}