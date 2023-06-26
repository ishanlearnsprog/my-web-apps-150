import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getUserContext } from "../../contexts/UserContext";

const Landing = () => {
    const navigate = useNavigate();
    const { user } = getUserContext();

    useEffect(() => {
        if (user) navigate("/wallet");
    }, [user])

    return (
        <main className="landing-container">
            <section className="cta-container">
                <h1 className="logo">TrackR</h1>
                <p>Keep Track Of All Your Finances In One Place</p>
                <div className="cta-btn-container">
                    <button onClick={() => navigate("/wallet")}>Start Tracking</button>
                </div>
            </section>
        </main>
    )
}

export default Landing;