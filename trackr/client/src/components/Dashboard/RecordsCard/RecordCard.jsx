import { useNavigate } from "react-router-dom";

import Record from "./Record.jsx";
import { getWalletContext } from "../../../contexts/WalletContext.jsx"

const RecordCard = () => {
    const navigate = useNavigate();
    const { records } = getWalletContext();

    const topFiveRecords = records.slice(0, records.length < 5 ? records.length : 5).map(record => {
        console.log()
        return <Record key={record._id} record={record}></Record>
    })

    return (
        <div className="dashboard-records-container">
            <div className="dashboard-records-section-header">
                <h1>Latest Records</h1>
                <button className="dashboard-btn">+ Record</button>
                <button onClick={() => navigate("/wallet/records")} className="dashboard-btn">All Records</button>
            </div>
            <div className="dashboard-records-section-content">
                {topFiveRecords}
            </div>
            {/* <div className="dashboard-records-section-footer">
                <button onClick={() => navigate("/wallet/records")} className="dashboard-btn">All Records</button>
            </div> */}
        </div>
    );
}

export default RecordCard;