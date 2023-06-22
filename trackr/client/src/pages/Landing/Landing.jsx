import EmailAuth from "./Auth/EmailAuth.jsx";

const Landing = () => {
    return (
        <main className="home-container">
            <section className="landing-container">
                <h1>TrackR</h1>
                <p>Keep track of all your finances</p>
            </section>
            <section className="auth-container">
                <EmailAuth></EmailAuth>
            </section>
        </main>
    )
}

export default Landing;