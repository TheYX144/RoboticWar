scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (info.score() == numOfEnemies) {
        game.over(true, effects.confetti)
    } else {
        tiles.placeOnRandomTile(Person, assets.tile`myTile`)
        game.splash("Defeat all of the enemies")
    }
})
function setPlayer () {
    Person = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 . . . . . 
        . . . 7 7 7 7 7 7 7 7 . . . . . 
        . . . 7 7 7 7 7 7 7 . . . . . . 
        . . . . 7 7 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . 7 7 7 7 7 . . . 7 7 . . . . 
        . . . . 7 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 . . . . . . . . . 
        . . . . . 7 . 7 . . . . . . . . 
        . . . . 7 . . . 7 . . . . . . . 
        . . . 7 7 . . . 7 7 . . . . . . 
        . . 7 7 . . . . . 7 . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Person, 25, 25)
    tiles.placeOnRandomTile(Person, assets.tile`myTile`)
    scene.cameraFollowSprite(Person)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Person, 50, 50)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        projectile.follow(value)
    }
})
function setRobotEnemy (many: number) {
    for (let index = 0; index < many; index++) {
        robotEnemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            . . . . . . 7 7 7 7 7 7 . . . . 
            . . . . 7 7 7 7 7 7 7 7 7 . . . 
            . . . . 7 7 7 7 7 7 7 7 7 7 . . 
            . . . . 7 7 7 7 7 7 7 7 7 7 . . 
            . . . . 7 7 7 7 7 7 7 7 7 7 . . 
            . . . . 7 7 7 7 7 7 7 7 7 . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . . . 7 7 7 . . . . . 7 7 7 . . 
            . . 7 7 7 . . . . . . . 7 7 . . 
            . . 7 7 . . . . . . . . 7 . . . 
            . . . . . . . . . . . . 7 . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(robotEnemy, assets.tile`bkg`)
    }
}
function setIntro () {
    text_list = [
    "RoboticWar",
    "A remake of Robot Attack",
    "Shoot the robots with (A)",
    "Don't touch walls/robots",
    "Then you shall leave"
    ]
    for (let value2 of text_list) {
        game.splash(value2)
    }
    return 0
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.spray, 500)
    game.over(false, effects.confetti)
    info.changeScoreBy(1)
})
let text_list: string[] = []
let robotEnemy: Sprite = null
let projectile: Sprite = null
let Person: Sprite = null
let numOfEnemies = 0
setIntro()
tiles.setCurrentTilemap(tilemap`level1`)
setPlayer()
numOfEnemies = randint(3, 10)
setRobotEnemy(numOfEnemies)
game.onUpdate(function () {
    for (let value3 of sprites.allOfKind(SpriteKind.Enemy)) {
        value3.follow(Person, randint(5, 10))
    }
})
