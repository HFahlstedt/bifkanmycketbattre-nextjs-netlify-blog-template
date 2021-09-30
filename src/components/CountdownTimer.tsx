import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const calculateTimeLeft = (): TimeLeft | null => {
  let difference = +new Date(`2021-11-29 18:00`) - +new Date();
  let timeLeft = null;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  });

  return timeLeft !== null ? (
    <>
      <div className="countdown-timer">{`${timeLeft.days} dagar, ${timeLeft.hours} timmar, ${timeLeft.minutes} minuter, ${timeLeft.seconds} sekunder till extra årsmöte`}</div>
    </>
  ) : null;
}
