import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),
    daysValue: document.querySelector('[data-days]'),
    hoursValue: document.querySelector('[data-hours]'),
    minutesValue: document.querySelector('[data-minutes]'),
    secondsValue: document.querySelector('[data-seconds]'),
}

refs.btnStart.addEventListener('click', ()=> {
    startTimer();
});

let startTime = new Date().getTime();
let finalTime = 0;
let intervalTime = 0;
let timerId = null;
refs.btnStart.disabled = true;


flatpickr("#datetime-picker", {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
          finalTime = selectedDates[0].getTime();
          checkDate();
        },
});


function checkDate (){
    if (finalTime < Date.now()){
        window.alert("Please choose a date in the future");
      } else {
        refs.btnStart.disabled = false;
      };
}


function startTimer (){
timerId = setInterval(() => {
    startTime = new Date();
    intervalTime = finalTime - startTime;
    formingTimerValue();
    stopTimer();
}, 1000)
}

function stopTimer() {
    if(intervalTime < 1000){
        clearInterval(timerId);
    };
}



function formingTimerValue() {
    refs.daysValue.textContent = Math.floor(intervalTime / 1000 / 60 / 60 / 24)
      .toString()
      .padStart(2, '0');
      refs.hoursValue.textContent = (Math.floor(intervalTime / 1000 / 60 / 60) % 24)
      .toString()
      .padStart(2, '0');
      refs.minutesValue.textContent = (Math.floor(intervalTime / 1000 / 60) % 60)
      .toString()
      .padStart(2, '0');
      refs.secondsValue.textContent = (Math.floor(intervalTime / 1000) % 60)
      .toString()
      .padStart(2, '0');
  }