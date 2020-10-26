// blinks on-board LED using Johnny Five

let five = require("johnny-five");
let arduino = new five.Board();

arduino.on("ready", function() {
    let led = new five.Led(13);
    led.blink(500);
})