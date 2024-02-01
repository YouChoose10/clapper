def on_sound_loud():
    claps += 1
    if claps == 2 and isOn:
        pins.digital_write_pin(DigitalPin.P0, 0)
        claps = 0
    elif claps == 2 and not isOn:
        pins.digital_write_pin(DigitalPin.P0, 1)
        claps = 0
        
input.on_sound(DetectedSound.LOUD, on_sound_loud)

claps = 0
isOn = False
serial.redirect_to_usb()

def on_forever():
    pass
basic.forever(on_forever)
