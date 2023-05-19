import { useNumberStoreContext } from "../contexts/useNumberStoreContext.jsx";

const CurrentNumber = () => {
    const { currentNumber, updatesCount } = useNumberStoreContext();
    return (
        <div className="current-number-container">
            {updatesCount ? <h1>Current number is: {currentNumber}</h1> : <h1>Value not set</h1>}
        </div>
    )
}

export default CurrentNumber;