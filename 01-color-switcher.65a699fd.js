btnStart=document.querySelector("[data-start]"),btnStop=document.querySelector("[data-stop]"),body=document.querySelector("body");const t={intervalId:null,isActive:!1,startChangeColor(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;body.style.backgroundColor=t}),1e3))},stopChangeColor(){clearInterval(this.intervalId),this.isActive=!1}};btnStart.addEventListener("click",(()=>{t.startChangeColor()})),btnStop.addEventListener("click",(()=>{t.stopChangeColor()}));
//# sourceMappingURL=01-color-switcher.65a699fd.js.map
