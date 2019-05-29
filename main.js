page = 0
function setup() {
        page = 0
}
var mainClock = setInterval(main, 30)
function main() {
        console.log(page)
}
function newGame() {
        page = 3
        window.location = 'new.html';
}
function joinGame() {
        page = 4
        window.location = 'join.html';
}
function masterActive() {
        page = 3
        window.location = 'master.html';
}
function playerActive() {
        page = 4
        window.location = 'player.html';
}