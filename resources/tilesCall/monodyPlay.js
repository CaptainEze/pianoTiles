const speed=1.3;
var currentTile,prevTile;
const selectTile =()=>{
    currentTile = arrAll[Math.floor(Math.random()*arrAll.length)];
    while(currentTile==prevTile) currentTile = arrAll[Math.floor(Math.random()*arrAll.length)];
    prevTile = currentTile;
    return currentTile;
}

const monody = new Howl({
    src:['../songs/1.mp3'],
    vol:1.0,
    onload:function(){
        let startBut = document.getElementById("but");
        startBut.innerHTML="start";
        startBut.disabled=false;
    }
});
selectTile();
const stoo=()=>{
    monody.stop();
}
const play1=()=>{
    monody.play();

    setTimeout(()=> {bringTiles(selectTile(),speed);},0);
    setTimeout(()=> {bringTiles(selectTile(),speed);},600);
    setTimeout(()=> {bringTiles(selectTile(),speed);},1200);
    setTimeout(()=> {bringTiles(selectTile(),speed);},2400);
    setTimeout(()=> {bringTiles(selectTile(),speed);},2900);
    setTimeout(()=> {bringTiles(selectTile(),speed);},3400);
    setTimeout(()=> {bringTiles(selectTile(),speed);},4600);
    setTimeout(()=> {bringTiles(selectTile(),speed);},5100);
    setTimeout(()=> {bringTiles(selectTile(),speed);},5800);
    setTimeout(()=> {bringTiles(selectTile(),speed);},6600);
    setTimeout(()=> {bringTiles(selectTile(),speed);},6900);
    setTimeout(()=> {bringTiles(selectTile(),speed);},7400);
    setTimeout(()=> {bringTiles(selectTile(),speed);},8100);
    setTimeout(()=> {bringTiles(selectTile(),speed);},9000);
    setTimeout(()=> {bringTiles(selectTile(),speed);},9700);
    setTimeout(()=> {bringTiles(selectTile(),speed);},10400);
    
    
    
    
    
}

