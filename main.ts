let item = 0
input.onGesture(Gesture.Shake, function () {
    item = randint(0, 2)
    if (item == 0) {
        basic.showString("Ja")
    } else if (item == 1) {
        basic.showString("neen")
    } else {
        basic.showString("misschien")
    }
})
basic.forever(function () {
	
})
