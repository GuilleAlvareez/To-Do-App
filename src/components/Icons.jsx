export function AddIcon(){
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        className="icon icon-tabler icon-tabler-plus w-5 h-5"
        viewBox="0 0 24 24"
        >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M12 5v14M5 12h14" />
        </svg>
        
    )
}

export function ResumeIcon({ windowSummary }){
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke={`${windowSummary ? 'currentColor' : 'black'}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            className="lucide lucide-pie-chart mr-2 h-6 w-6"
            data-id={44}
        >
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
            <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
    )
}


export function TagIcon() {
    return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#2c3e50"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      className="icon icon-tabler icon-tabler-tag w-3 h-3"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M6.5 7.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
      <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592-5.592a2.41 2.41 0 0 0 0-3.408l-7.71-7.71A2 2 0 0 0 11.172 3H6a3 3 0 0 0-3 3z" />
    </svg>
  )
}
  
export function TrashIcon({ windowTasks }) {
    return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={`${windowTasks ? 'currentColor' : 'black'}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      className="lucide lucide-trash2 mr-2 h-6 w-6"
      data-id={50}
    >
      <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6" />
    </svg>
  )
}