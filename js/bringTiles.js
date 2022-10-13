/*
    *This script is responsible for calling the 
    *tiles defined "@./createTilesFunction.js" 
    *depending on the position either 1st, 2nd,
    *3rd or the 4th position.This is determined
    *by the first argument.
    *
    *The second argument determines the speed of
    *of the tiles.
*/

const bringTiles=(position,speed)=>{
    switch (position) {
        case 1:
            createTile1(speed);
            break;
        case 2:
            createTile2(speed);
            break;
        case 3:
            createTile3(speed);
            break;
        case 4:
            createTile4(speed);
            break;
        case 5:
            createDbTilesA(speed);
            break;
        case 6:
            createDbTilesB(speed);
            break;
    }
}

/*
    *written by Eze
    * open source
*/

