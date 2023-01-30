let random = 0
input.onPinPressed(TouchPin.P0, function () {
    random = randint(0, 99)
    basic.showNumber(random)
})
