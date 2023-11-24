const deadline = '2024-8-13';

function getTimeRemaining(endtime) {
  const time = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(time / (1000 * 60 * 60 * 24)),
    hours = Math.floor((time / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((time / 1000 / 60) % 60),
    seconds = Math.floor((time / 1000) % 60);

  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
  };
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else if (num < 0) {
    return `00`;
  } else {
    return num;
  }
}

function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    timeInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const time = getTimeRemaining(endtime);

    days.innerHTML = getZero(time.days);
    hours.innerHTML = getZero(time.hours);
    minutes.innerHTML = getZero(time.minutes);
    seconds.innerHTML = getZero(time.seconds);

    if (time.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}

setClock('.timer', deadline);
