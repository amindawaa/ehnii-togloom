sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(true)
})
scene.setBackgroundColor(5)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 . 3 3 3 . . . . . 
    . . . . 3 1 3 3 3 1 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 1 3 3 3 1 3 3 . . . . 
    . . . 3 3 f 3 3 3 f 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 1 1 1 3 3 3 . . . . 
    . . . 3 3 3 1 1 1 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 f f 3 f f 3 3 . . . . 
    . . 3 3 3 f f 3 f f 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 f f 3 f f 3 3 3 . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let mgl_tariachin = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . 5 5 5 . . . . 1 . 1 
    . . . . . . 2 2 2 . . . . 1 . 1 
    . . . . 5 5 5 5 5 5 5 . . 1 . 1 
    . . . . . . d d 1 d . . . 1 1 1 
    . . . . . . d d d . . . . . e . 
    . . . . . . d d 2 . . . . . e . 
    . . e e e e e e e e e e e . e . 
    . . e e e e e e f e e e e d e . 
    . . e e e e e e e e e e e . e . 
    . . e e . e e e f e . . . . e . 
    . . e e . e e e e e . . . . e . 
    `, SpriteKind.Enemy)
mgl_tariachin.setPosition(148, 120)
info.startCountdown(15)
game.onUpdateInterval(100, function () {
    mgl_tariachin.setPosition(randint(0, 140), randint(0, 120))
})
