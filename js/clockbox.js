var tday=new Array("Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag");
var tmonth=new Array("Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember");

function GetClock(){
    var d=new Date();
    var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
    var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();

    if (nmin<=9)
        nmin="0"+nmin

    if (nsec<=9)
        nsec="0"+nsec

    document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+ndate+". "+tmonth[nmonth]+" "+nhour+":"+nmin+":"+nsec+"";
}

window.onload=function(){
    GetClock();
    setInterval(GetClock,1000);
}