serial.redirectToUSB()
basic.forever(function () {
    basic.pause(100)
    serial.writeLine("" + (input.lightLevel()))
})
