basic.forever(function () {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, pins.digitalReadPin(DigitalPin.P0) / 1024 * 5)
    }
})
