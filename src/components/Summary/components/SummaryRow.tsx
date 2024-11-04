interface SummaryRowProps {
    laps: number[]
}
const SummaryRow = ({laps} : SummaryRowProps) => { 
    const getAverageTime = () => {
        const totalMilliseconds = laps.reduce((sum, lap) => sum + lap, 0);
    
        const averageMilliseconds = totalMilliseconds / laps.length;
    

        const minutes = Math.floor((averageMilliseconds % 360000) / 6000);
        const seconds = Math.floor((averageMilliseconds % 6000) / 100);
        const milliseconds = Math.round(averageMilliseconds % 100);

        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
    };

    const getFastestLap = () => {
        const fastestLap = Math.min(...laps);
        const minutes = Math.floor((fastestLap % 360000) / 6000);
        const seconds = Math.floor((fastestLap % 6000) / 100);
        const milliseconds = fastestLap % 100;

        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
    };

    const getSlowestLap = () => {
        const slowestLap = Math.max(...laps);
        const minutes = Math.floor((slowestLap % 360000) / 6000);
        const seconds = Math.floor((slowestLap % 6000) / 100);
        const milliseconds = slowestLap % 100;

        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
    };

    if (laps.length > 0) {
        return  <>
        <p>Avarage time of lap: {getAverageTime()}</p>

        <p>Fastest Lap: {getFastestLap()}</p>

        <p>Slowest Lap: {getSlowestLap()}</p>

        <p>Total Laps: {laps.length}</p>
    </>
    }
       
    return <p>Total laps: 0</p>}
  


export default SummaryRow
