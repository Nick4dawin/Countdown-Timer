
var newYears;

var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
function myFunction() {
    var title = prompt("please enter title");
    var today = new Date();
    var date = prompt("Please enter date.", today.getDate()+"-"+monthNames[today.getMonth()]+"-"+today.getFullYear());
   
    if (date != null) {
        newYears =  date;
        countdown(newYears);
        setInterval(function(){countdown(newYears);} ,1000);
        document.getElementById("timer-title").textContent = title;
    }
    
    
}


function countdown(newYears){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = Math.floor((newYearsDate - currentDate)/1000) ;
    const Days = Math.floor(seconds / ( 60 * 60 * 24));
    const hours = Math.floor(seconds / ( 60 * 60 ));
    const mins = Math.floor(seconds / (  60 ));
    
    document.getElementById("days").textContent = Days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("mins").textContent = mins;
    document.getElementById("secs").textContent = seconds;
}



