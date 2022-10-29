var fa=document.getElementById('fa');
var fs=document.getElementById('fs');
var h=document.getElementById('h');
fa.addEventListener('click', function() {
    var i=window.getComputedStyle(h).fontSize;
    i=parseInt(i.substring(0,i.length-2));
    h.style.fontSize=(i+50)+"px";
})
fs.addEventListener('click', function() {
    var i=window.getComputedStyle(h).fontSize;
    i=parseInt(i.substring(0,i.length-2));
    h.style.fontSize=(i-50)+"px";
})