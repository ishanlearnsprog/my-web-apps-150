import { Introduction } from "./Introduction.jsx"
import { CountDown } from "./Countdown.jsx";

export const App = () => {
    return (
        <>
            <main>
                <section className="container container-introduction">
                    <Introduction></Introduction>
                </section>
                <section className="container container-countdown">
                    <CountDown></CountDown>
                </section>
            </main>
        </>
    )
}