page = 0
function setup() {
        page = 0
}
var mainClock = setInterval(main, 30)
function main() {
        console.log(page)
}
function masterActive() {
        page = 1
        window.location = 'http://127.0.0.1:5500/master.html';
}
function playerActive() {
        page = 2
        window.location = 'http://127.0.0.1:5500/player.html';
}