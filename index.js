const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');
const year=document.getElementById('year');
const countdown=document.getElementById('countdown');


const currentYear=new Date().getFullYear();     //2023
const nextYear=currentYear+1;        //2024
let newYearTime=new Date(`January 01 2024 00:00:00`);

function update()
{
    let currentTime=new Date();   //27th dec-2023 8:41
    let diff=newYearTime - currentTime;  //diff:8097655452
   
    let d=Math.floor(diff/1000/60/60/24);
    let h=Math.floor(diff/1000/60/60)%24;
    let m=Math.floor(diff/1000/60)%60;
    let s=Math.floor(diff/1000)%60;

    days.innerHTML=d<10 ? "0"+d : d;
    hours.innerHTML=h<10 ? "0"+h : h;
    minutes.innerHTML=m<10 ? "0"+m : m ;
    seconds.innerHTML=s<10 ? "0"+s : s;
    
}

setInterval(update,1000)
