input.onButtonPressed(Button.A, function () {
    serial.writeLine(timeanddate.dateTime())
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("" + (timeanddate.secondsSinceReset()))
})
timeanddate.set24HourTime(14, 0, 0)
timeanddate.setDate(6, 6, 2023)
basic.forever(function () {
	
})
