import { useState } from "react";

export const CountDown = () => {
    const [countDown, setCountDown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [showPost, setShowPost] = useState(false);

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

    const styles = {
        display: showPost ? "block" : "none"
    }

    return (
        <>
            <div>
                <h1>{countDownTitle}</h1>
                <div>
                    <div>
                        <span>{countDown.days}</span>
                        <span>DAYS</span>
                    </div>
                    <div>
                        <span>{countDown.hours}</span>
                        <span>HOURS</span>
                    </div>
                    <div>
                        <span>{countDown.minutes}</span>
                        <span>MINUTES</span>
                    </div>
                    <div>
                        <span>{countDown.seconds}</span>
                        <span>SECONDS</span>
                    </div>
                </div>
                <div>
                    <button onClick={() => setShowPost(!showPost)}>What's this countdown about?</button>
                    <iframe style={styles} src="https://www.linkedin.com/embed/feed/update/urn:li:share:7062747909976440833" height="804" width="504" allowFullScreen={false} title="WEB DEV COUNTDOWN POST"></iframe>
                </div>
            </div>
        </>
    )
}