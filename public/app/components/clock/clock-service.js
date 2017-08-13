/*function ClockService() {

    var url = '//bcw-getter.herokuapp.com/?url='
    var url2 = 'http://worldclockapi.com/api/json/mst/now'
    var apiUrl = url + encodeURIComponent(url2)

    this.getTime = function (callWhenDone) {
        $.get(apiUrl, function(res) {
            res = JSON.parse(res)
            localStorage.setItem('clock', JSON.stringify(res))

            callWhenDone(res)
        })
    }
}*/