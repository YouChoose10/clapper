input.onSound(DetectedSound.Loud, function () {
    claps += 1
    if (claps == 2 && isOn) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        claps = 0
        isOn = false
    } else if (claps == 2 && !(isOn)) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        isOn = true
        claps = 0
    }
})
let isOn = false
let claps = 0
claps = 0
serial.redirectToUSB()
basic.forever(function () {
	
})
