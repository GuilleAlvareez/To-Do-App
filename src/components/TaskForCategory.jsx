import { useContext } from "react"
import { listTaskContext } from "../contexts/setOfTask"

export function TaskForCategory({ category }) {
    const { listTasks } = useContext(listTaskContext)

    return (
        <article className="flex flex-col mx-5 rounded border p-4 gap-2 border-gray-300 mb-5">
            <label>{category}: {Array.from(listTasks).filter(task => task.category === category).length}</label>
        </article>
    )
}