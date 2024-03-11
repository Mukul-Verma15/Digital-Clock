let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let currentTime=new Date();

hrs.innerHTML=currentTime.getHours();
hrs.innerHTML=currentTime.getMinutes();
hrs.innerHTML=currentTime.getSeconds();
