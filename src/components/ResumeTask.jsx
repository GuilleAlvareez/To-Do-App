import { useContext } from "react"
import { listTaskContext } from "../contexts/setOfTask"

export function ResumeTask() {
    const { listTasks } = useContext(listTaskContext)

    //ARREGLARS
    const pendingTask = () => {
        let cont = 0

        Array.from(listTasks).forEach((task) => {
            if (!task.completed) {
                cont++
            }
            return cont
        })
    }

    return (
        <article className="flex flex-col mx-5 rounded border p-4 gap-2 border-gray-300 mb-5">
          <label>Total tasks: {Array.from(listTasks).length}</label>
          <label>Tasks completed:</label>
          <label>Pending tasks:</label>
        </article>
    )
}