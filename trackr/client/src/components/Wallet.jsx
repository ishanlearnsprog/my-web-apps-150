import {
    Outlet
} from "react-router-dom";

const Wallet = () => {
    return (
        <>
            <h1>Wallet</h1>
            <Outlet></Outlet>
        </>
    )
}

export default Wallet;