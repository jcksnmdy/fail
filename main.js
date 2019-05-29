page = 0
function setup() {
        page = 0
}
var mainClock = setInterval(main, 30)
function main() {
        console.log(page)
}
function masterActive() {
        page = 2
        window.location = 'master.html';
}
function playerActive() {
        page = 3
        window.location = 'player.html';
}