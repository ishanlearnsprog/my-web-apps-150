import { useNavigate } from "react-router-dom";
import { getUserContext } from "../../contexts/UserContext";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <main className="landing-container">
            <section className="cta-container">
                <h1 className="logo">TrackR</h1>
                <p>Keep Track Of All Your Finances In One Place</p>
                <div className="cta-btn-container">
                    <button onClick={() => navigate("/auth")}>Start Tracking</button>
                </div>
            </section>
        </main>
    )
}

export default Landing;