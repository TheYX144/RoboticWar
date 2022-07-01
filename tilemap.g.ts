// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202010202020202020202020404020202020102020202020201020204040202020202020202020202010101010102020202020202020202020202020202010101010101010202020202020201010202020202020102020202010101010102020202020201010202020202020202020202020202020102020202020202020302020202020201020202020202020203020202020202010202020202020202030202020202020102020202010202020202020202020201020202020102020202020202020202010202020201020202020202020202020202020202020102020202020202020202020202020202010202020202020202020202020202020201`, img`
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . . . . . . . . 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . . . . . . . 2 2 
. . . . . . 2 . . . . 2 2 2 2 2 
. . . . . . 2 2 . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . . 2 . . . . 2 . . . 
. . . . . . . 2 . . . . 2 . . . 
. . . . . . . 2 . . . . 2 . . . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . . 2 . 
. . . . . . . . . . . . . . . 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "walls":
            case "tile1":return tile1;
            case "bkg":
            case "tile2":return tile2;
            case "myTile":
            case "tile3":return tile3;
            case "myTile0":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
