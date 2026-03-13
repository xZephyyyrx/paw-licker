const LICKDISPLAY = document.getElementById("lickDisplay");
const THEPAW = document.getElementById("thePaw");
const TICKRATE = 50;

var licks = 0;
var cursorX = 0;
var cursorY = 0;
var oldCursorX = 0;
var oldCursorY = 0;

function updateLicks() {
    LICKDISPLAY.innerHTML = `${licks} Paws Licked`;
}

function lick() {
    licks++;
    updateLicks();
}

function pointDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
}

addEventListener("mousemove", (event) => {
    oldCursorX = cursorX;
    oldCursorY = cursorY;
    cursorX = event.clientX;
    cursorY = event.clientY;
});

function main() {
    if (THEPAW.matches(':hover')) {
        console.log(`Distance: ${pointDistance(oldCursorX, oldCursorY, cursorX, cursorY)}`);
    }
}
setInterval(main, 1000/TICKRATE);

