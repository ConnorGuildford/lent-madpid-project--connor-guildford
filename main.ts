controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
effects.starField.startScreenEffect()
controller.moveSprite(mySprite)
info.setScore(0)
info.changeScoreBy(1)
game.over(true, effects.dissolve)
