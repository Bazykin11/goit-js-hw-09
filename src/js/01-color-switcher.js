
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

// let timerId = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const changeColor = {
  intervalId: null,
  isActive: false,
  startChangeColor (){
    if (this.isActive){
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval (() => {
      let color = getRandomHexColor();
      body.style.backgroundColor = color;
    },1000);
    },

  stopChangeColor(){
    clearInterval(this.intervalId);
    this.isActive = false;
  },
}

  btnStart.addEventListener('click', () =>{
    changeColor.startChangeColor();
  });

  btnStop.addEventListener('click', () =>{
    changeColor.stopChangeColor();
  });




  // let timerId = setInterval(() => (getRandomHexColor,1000));

  // let color = getRandomHexColor();
//   body.style.backgroundColor = color;

//   btnStart.addEventListener('click', () => {
//     timerId = setInterval(() => {
//       getRandomHexColor();
//       body.style.backgroundColor = color;
//   },1000);
// });




// const  onStart = () => {
//       setTimeout(() => { 
//      getRandomHexColor();
// },1000)};
