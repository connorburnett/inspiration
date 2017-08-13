function ClockController() {

    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('clock').innerHTML =
            h + ":" + m + ":" + s;
        var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
        if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
        return i;
    }
    startTime()
}

/*function ClockController() {

    var cs = this
    var clockService = new ClockService()

    clockService.getTime(function(clock) {

        var day = clock.dayOfTheWeek
        var time = clock.currentDateTime

        var template = `
            <div>${day}, ${time}</div>
        `

        document.getElementById('clock').innerHTML = template
    })
}*/

