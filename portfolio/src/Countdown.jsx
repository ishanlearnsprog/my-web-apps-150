import { useState, useRef } from "react";

export const CountDown = () => {
    const [countDown, setCountDown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const countDownTitle = "Web Dev Countdown";
    const countDownDate = new Date(2023, 10, 28);

    setInterval(() => {
        let currentDate = new Date();
        let distance = countDownDate - currentDate;
        if (distance < 0) {
            setCountDown({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            });
        } else {
            setCountDown({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            })
        }
    }, 1000);

    return (
        <>
            <div className="countdown">
                <h2>{countDownTitle}</h2>
                <div className="countdown-clock">
                    <div className="countdown-clock-dials">
                        <span className="dial-value">{countDown.days}</span>
                        <span className="dial-title">DAYS</span>
                    </div>
                    <div className="countdown-clock-dials">
                        <span className="dial-value">{countDown.hours}</span>
                        <span className="dial-title">HOURS</span>
                    </div>
                    <div className="countdown-clock-dials">
                        <span className="dial-value">{countDown.minutes}</span>
                        <span className="dial-title">MINUTES</span>
                    </div>
                    <div className="countdown-clock-dials">
                        <span className="dial-value">{countDown.seconds}</span>
                        <span className="dial-title">SECONDS</span>
                    </div>
                </div>
                <a href="https://www.linkedin.com/posts/ishanlearnsprog_webdevelopment-html5-css-activity-7062747912690167809-SlMe/?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                    What's this countdown about?
                </a>
            </div>
        </>
    )
}

