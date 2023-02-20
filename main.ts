function batton () {
    servos.P0.setAngle(randint(45, 135))
    basic.pause(moteurdelai)
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    point = 0
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    ballon = 0
})
let moteurdelai = 0
let ballon = 0
let point = 0
basic.showIcon(IconNames.StickFigure)
point = 0
ballon = 0
moteurdelai = 200
basic.forever(function () {
    if (ballon == 0) {
        batton()
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2) && ballon == 0) {
        point += 1
        ballon += 1
        servos.P0.setAngle(45)
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.showNumber(point)
        basic.pause(100)
    }
})
