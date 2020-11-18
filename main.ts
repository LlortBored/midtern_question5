input.onButtonPressed(Button.A, function () {
    if (count_down == -1) {
        count_down = 5
        while (count_down > 0) {
            basic.showNumber(count_down)
            basic.pause(1000)
            count_down += -1
        }
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    } else if (count_down == 0) {
        basic.clearScreen()
        basic.showString(" A wins")
        basic.pause(1000)
        count_down = -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (count_down == -1) {
        count_down = 5
        while (count_down > 0) {
            basic.showNumber(count_down)
            basic.pause(1000)
            count_down += -1
        }
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    } else if (count_down == 0) {
        basic.clearScreen()
        basic.showString(" Draw")
        basic.pause(1000)
        count_down = -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (count_down == -1) {
        count_down = 5
        while (count_down > 0) {
            basic.showNumber(count_down)
            basic.pause(1000)
            count_down += -1
        }
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    } else if (count_down == 0) {
        basic.clearScreen()
        basic.showString(" B wins")
        basic.pause(1000)
        count_down = -1
    }
})
let count_down = 0
count_down = -1
basic.forever(function () {
	
})
