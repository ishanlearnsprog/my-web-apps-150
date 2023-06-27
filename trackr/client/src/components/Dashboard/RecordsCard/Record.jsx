import { formatAmountIndia } from "../../../utils/formatAmount.jsx";

const Record = ({ record }) => {

    let typeColor = "";
    let recordAmount = "";
    let recordName = "";
    let recordAccount = "";

    switch (record.paymentType) {
        case "income": {
            recordAmount = <>&#8377;{formatAmountIndia(record.amount)}</>;
            typeColor = "#4095bf";
            recordName = <>{record.category.name}</>;
            recordAccount = <>{record.account.name}</>;
            break;
        }
        case "expense": {
            recordAmount = <>-&#8377;{formatAmountIndia(record.amount)}</>;
            typeColor = "#ac3939";
            recordName = <>{record.category.name}</>;
            recordAccount = <>{record.account.name}</>;
            break;
        }
        case "transfer": {
            recordAmount = <>&#8377;{formatAmountIndia(record.amount)}</>;
            typeColor = "#60ac39";
            recordName = <>Transfer to {record.recievingAccount.name}</>;
            recordAccount = <>{record.account.name}</>;
            break;
        }
        default: {
            recordAmount = <>&#8377;{formatAmountIndia(record.amount)}</>;
            typeColor = "#60ac39";
            recordName = <>Unknown</>;
            recordAccount = <>Unknow</>;
        }
    }

    return (
        <div className="record-card-items">
            <div className="record-type-section">
                <h1 style={{ color: typeColor }}>
                    {
                        record.paymentType === "income" ? (<i className="fa-solid fa-plus"></i>) :
                            record.paymentType === "expense" ? (<i className="fa-solid fa-minus"></i>) : (<i className="fa-solid fa-arrow-right-arrow-left"></i>)
                    }
                </h1>
            </div>
            <div className="record-info-section">
                <h1>{recordName}</h1>
                <p>{recordAccount}</p>
            </div>
            <div className="record-amount-section">
                <h1 style={{ color: typeColor }}>{recordAmount}</h1>
            </div>
        </div >
    )
}

export default Record;