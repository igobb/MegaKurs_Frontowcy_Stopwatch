import { Button } from "../Button/Button"
import SummaryRow from "./components/SummaryRow"

interface SummaryProps {
    time: number
    setTime:React.Dispatch<React.SetStateAction<number>>
    setLapTime: React.Dispatch<React.SetStateAction<number>>
    laps: number[]
    setLaps: React.Dispatch<React.SetStateAction<number[]>>
    setShowSummary:  React.Dispatch<React.SetStateAction<boolean>>
}

const Summary = ({setShowSummary, time, setTime, setLapTime, laps, setLaps} : SummaryProps) => {

    const resetStopwatch = () => {
        setShowSummary(false)
        setTime(0)
        setLapTime(0)
        setLaps([])
    }

    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    return (
        <div>
            <h1>Summary:</h1>

            <p>Total: {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}:{milliseconds.toString().padStart(2, "0")}</p>

            <SummaryRow laps={laps}/>

            <Button onClick={resetStopwatch} color='white' label='Reset' />

        </div>
  )
}

export default Summary
