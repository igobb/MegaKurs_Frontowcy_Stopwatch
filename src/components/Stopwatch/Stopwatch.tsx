import { useEffect, useState } from 'react'
import './Stopwatch.scss'
import { Button } from '../Button/Button';
import Summary from '../Summary/Summary';
import StopwatchComponent from './components/StopwatchComponent';
import LapsTable from '../LapsTable/LapsTable';

export const Stopwatch = () => {
    const [time, setTime] = useState(0)

    const [lapTime, setLapTime] = useState(0)

    const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);

    const [laps, setLaps] = useState<number[]>([])

    const [showSummary, setShowSummary] = useState(false)

    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    const lapMinutes = Math.floor((lapTime % 360000) / 6000);
    const lapSeconds = Math.floor((lapTime % 6000) / 100);
    const lapMilliseconds = lapTime % 100;

    const startRunning = () => {
        setIsStopwatchRunning(true);
    };

    const stopRunning = () => {
        setIsStopwatchRunning(false);
        setLaps((prev) => [...prev, lapTime])
        setShowSummary(true)
    };

    const resetStopwatch = () => {
        setTime(0);
        setLapTime(0)
        setLaps([])
    };

    const saveLapTime = () => {
        setLaps((prev) => [...prev, lapTime])

        setLapTime(0)
    }
    
    useEffect(() => {
        if (isStopwatchRunning) {
            const interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1)

                setLapTime(prevTime => prevTime + 1);
              }, 10);
              
              return () => clearInterval(interval);
            }
      }, [isStopwatchRunning]);

    if (showSummary) {
        return <Summary setShowSummary={setShowSummary} time={time} setTime={setTime} setLapTime={setLapTime} laps={laps} setLaps={setLaps} />
    }

    return (
        <div>        
            <div className='wrapper'>
               <StopwatchComponent type='stopwatch' minutes={minutes} seconds={seconds} milliseconds={milliseconds} />

               <StopwatchComponent type='lapStopwatch' minutes={lapMinutes} seconds={lapSeconds} milliseconds={lapMilliseconds} />
            </div>

            <div className='buttons-wrapper'>
                <Button onClick={startRunning} color='green' label='Start' isDisabled={isStopwatchRunning} />

                <Button onClick={stopRunning} color='red' label='Stop' isDisabled={!isStopwatchRunning} />

                <Button onClick={resetStopwatch} color='white' label='Reset' isDisabled={!isStopwatchRunning} />

                <Button onClick={saveLapTime} color='blue' label='Lap' isDisabled={!isStopwatchRunning} />
            </div> 

            <div>
                <LapsTable laps={laps} />
            </div>
        </div>
    )
}