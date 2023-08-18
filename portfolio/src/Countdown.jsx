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
                        <span>D</span>
                        <span>{countDown.days}</span>
                    </div>
                    <div>
                        <span>H</span>
                        <span>{countDown.hours}</span>
                    </div>
                    <div>
                        <span>M</span>
                        <span>{countDown.minutes}</span>
                    </div>
                    <div>
                        <span>S</span>
                        <span>{countDown.seconds}</span>
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