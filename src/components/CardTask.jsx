import { TagIcon, TrashIcon } from './Icons.jsx'
import { useState, useContext } from 'react'
import { listTaskContext } from '../contexts/setOfTask.jsx'

export function CardTask({ task }) {
    const [isChecked, setIsChecked] = useState(task.completed)
    const { deleteTask } = useContext(listTaskContext)

    const handleCheckTask = () => {
        setIsChecked(!isChecked)
    }

    return (
        <article className="flex flex-row p-4 gap-4 mb-2 border-gray-300 rounded border mx-5">
            <input type="checkbox" checked={isChecked} onChange={handleCheckTask} className="w-4 cursor-pointer"/>

            <div className="flex flex-row justify-between w-full items-center">
                <div className='flex flex-col'>
                    <label>{isChecked ? <s>{task.name}</s> : task.name}</label>
                    <label className='flex items-center gap-2'>
                        <TagIcon/>
                        {task.category}
                    </label>
                </div>

                <button onClick={() => deleteTask(task)}
                    className="pl-2 w-10 h-10 flex items-center justify-center cursor-pointer">
                    <TrashIcon />
                </button>

            </div>

        </article>
    )
}