interface LapsTableProps {
    laps: number[]
}
const LapsTable = ({laps} : LapsTableProps) => {
  return (
    <ol>
    {laps.map((lap, index) => {
        const lapMinutes = Math.floor((lap % 360000) / 6000);
        const lapSeconds = Math.floor((lap % 6000) / 100);
        const lapMilliseconds = lap % 100;

        const formattedLap = `${lapMinutes.toString().padStart(2, "0")}:${lapSeconds.toString().padStart(2, "0")}:${lapMilliseconds.toString().padStart(2, "0")}`;

        return (
            <li key={index}>{formattedLap}</li>
        );
    })}
    </ol>
  )
}

export default LapsTable
