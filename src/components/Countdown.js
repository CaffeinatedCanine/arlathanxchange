import React, { useEffect, useState } from "react";

import styles from "../pages/index.module.css";

function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2023-06-04T12:00:00-04:00`) - +new Date();
    let timeLeft = {};

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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div className={styles.countdown}>
      <h1>See you again in 2024 for Arlathan eXchange!</h1>
      <b>
        Join us for{" "}
        <a href="https://dapolyshipping.neocities.org">DA Poly Exchange</a> in
        Fall 2023
        <br />
        or join us at{" "}
        <a href="https://thehangedmanpub.netlify.app/">The Hanged Man!</a>
      </b>
      {/* <b>{timerComponents.length ? timerComponents : <span>Now!</span>}</b> */}
    </div>
  );
}

export default Countdown;
