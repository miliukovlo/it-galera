import { Progress } from "rsuite"

interface CircleProps {
    progress: number
}

const Circle : React.FC<CircleProps> = ({
    progress
}) => {
    return (
        <Progress.Circle 
        percent={progress} 
        strokeColor="blue" 
        strokeWidth={10}
        trailColor="lightgrey"
        trailWidth={10}
        />
    )
}

export default Circle