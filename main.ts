enum RadioMessage {
    message1 = 49434
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Massage = 2
})
radio.onReceivedNumber(function (receivedNumber) {
    game.splash(receivedNumber)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    radio.sendNumber(Massage)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Massage = 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Massage = 4
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Massage = 3
})
let Massage = 0
radio.setGroup(88)
