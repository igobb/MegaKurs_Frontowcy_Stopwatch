interface StopwatchComponentProps {
    type: string
    minutes: number
    seconds: number
    milliseconds: number
}
const StopwatchComponent = ({type, minutes, seconds, milliseconds} : StopwatchComponentProps) => {
  return (
    <div>
        <p>{type === 'lapStopwatch' ? 'Lap Stopwatch' : 'Stopwatch' }</p>

        <div className={type === 'lapStopwatch' ? 'lap-stopwatch__container' : 'stopwatch__container'}>
            <h1>{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</h1>

            <h1 className={type === 'lapStopwatch' ? 'lap-stopwatch__container--lap-miliseconds' : 'stopwatch__container--miliseconds'}>
            :{milliseconds.toString().padStart(2, "0")}</h1>
        </div>
</div>
  )
}

export default StopwatchComponent
