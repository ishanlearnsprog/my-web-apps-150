import { Introduction } from "./Introduction.jsx"
import { CountDown } from "./Countdown.jsx";

export const App = () => {
    return (
        <>
            <main>
                <section className="introduction-container">
                    <Introduction></Introduction>
                </section>
                <section className="count-down-container">
                    <CountDown></CountDown>
                </section>
            </main>
        </>
    )
}