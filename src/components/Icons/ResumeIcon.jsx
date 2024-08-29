export default function ResumeIcon({ isOpenResume }){
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke={`${isOpenResume ? 'currentColor' : 'black'}`}
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
