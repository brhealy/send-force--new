let Force = 0
basic.showIcon(IconNames.Heart)
radio.setGroup(20)
basic.forever(function () {
    serial.writeValue("Force", Force)
    Force = input.acceleration(Dimension.Strength)
    radio.sendNumber(Force)
})
