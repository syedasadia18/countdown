let days=document.querySelectorAll("days");
let hours=document.querySelectorAll("hours");
let mints=document.querySelectorAll("minutes");
let secnds=document.querySelectorAll("sceonds");

let currentYear=new Date().getFullYear();

let newYearTime= new Date(`january 01 ${currentYear + 1} 00:00:00`);
 
function updatecountdowntime()
{

let currentYear= new Date();
let diff = newYearTime-currentYear;

let d=Math.floor(diff / 3600 / 24);

let h=Math.floor(diff / 1000 / 60 / 60) % 24;
let m=Math.floor(diff / 1000 /60) % 60;
let s=Math.floor(diff / 1000) % 60;

days.innerHTML = d;
hours.innerHTML= h < 10 ? '0' + h : h;
minutes.innerHTML= m < 10 ? '0' + m : m;
sceonds.innerHTML= s < 10 ? '0' + s : s;
}
setInterval(updatecountdowntime,1000);