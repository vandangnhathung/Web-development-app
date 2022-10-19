const $ = document.querySelector.bind(document);
const dayDemo = document.querySelector(".day")
var html_day = $('.day')
var html_hour = $('.hour')
var html_minute = $('.minute')
var html_second = $('.second')
var html_prepand = $('.prepand')

var today = new Date();
var day = today.getDay();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand;
var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
(hour >=12)? prepand = "PM" : prepand = "AM";

html_day.innerText = dayList[day];
html_hour.innerText = hour;
html_hour.innerText = hour;
html_minute.innerText = minute  ;
html_second.innerText = second ;
html_prepand.innerText = prepand ;