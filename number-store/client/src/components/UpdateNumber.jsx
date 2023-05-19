import { useState } from "react";

import { useNumberStoreContext } from "../contexts/useNumberStoreContext.jsx";


const UpdateNumber = () => {
    const [number, setNumber] = useState(0);
    const { updateNumber } = useNumberStoreContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        updateNumber(number);
        setNumber(0);
    }

    return (
        <div className="update-number-container">
            <form onSubmit={handleSubmit}>
                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
                <button type="submit">Set New Number</button>
            </form>
        </div>
    )
}

export default UpdateNumber;