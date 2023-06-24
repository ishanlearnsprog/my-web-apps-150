import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getUserContext } from "../../contexts/UserContext";

const Landing = () => {
    const navigate = useNavigate();
    const { user, userDispatch } = getUserContext();

    useEffect(() => {
        if (user) navigate("/wallet");
    }, [user])

    return (
        <main className="home-container">
            <section className="landing-container">
                <h1>TrackR</h1>
                <p>Keep track of all your finances</p>
            </section>
            <button onClick={() => navigate("/wallet")}>Start Tracking</button>
        </main>
    )
}

export default Landing;