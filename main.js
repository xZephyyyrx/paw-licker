const TICKRATE = 50;

var licks = 0;
var lickMult = 1;
var distRequirement = 200;
var currentDist = 0;
var cursorX = 0;
var cursorY = 0;
var oldCursorX = 0;
var oldCursorY = 0;

function lick() {
    licks++;
    updateLicks();
}

function licking() {
    // Add lick progress to current lick distance
    if (THEPAW.matches(':hover')) {
        currentDist += pointDistance(oldCursorX, oldCursorY, cursorX, cursorY);
        if (currentDist > distRequirement) {
            let trig = Math.floor(currentDist/distRequirement);
            licks += trig*lickMult;
            currentDist -= trig*distRequirement;
            updateLicks();
        }
    }
    // Update cursor positions to prevent gaining free distance
    oldCursorX = cursorX;
    oldCursorY = cursorY;
}

addEventListener("mousemove", (event) => {
    oldCursorX = cursorX;
    oldCursorY = cursorY;
    cursorX = event.clientX;
    cursorY = event.clientY;
});

function main() {
   licking();
}
setInterval(main, 1000/TICKRATE);

