import React from "react"
import { Progress } from "rsuite"

interface CircleProps {
    progress: number
}

const Circle : React.FC<CircleProps> = React.memo(({
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
})

Circle.displayName = "Circle"

export default Circle