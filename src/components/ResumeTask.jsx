import { useContext } from "react"
import { listTaskContext } from "../contexts/setOfTask"

export function ResumeTask() {
    const { listTasks } = useContext(listTaskContext)

    return (
        <article className="flex flex-col mx-5 rounded border p-4 gap-2 border-gray-300 mb-5">
          <label>Total tasks: {Array.from(listTasks).length}</label>
          <label>Pending tasks:  {Array.from(listTasks).filter((task) => !task.completed).length}</label>
        </article>
    )
}