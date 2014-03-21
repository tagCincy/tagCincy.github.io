$(document).ready(function() {
    var lastDay = new Date("March 25, 2014 17:30:00")
    var now = new Date();
    var diff = lastDay.getTime()/1000 - now.getTime()/1000

    var clock = $('.your-clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });
});

