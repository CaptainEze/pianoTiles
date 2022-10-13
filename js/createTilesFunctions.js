/*
    *This script is responsible for creating tiles
    *at specific positions.
    *
    *Each function creates a new tile at specific
    *positions either the 1st, 2nd, 3rd or the 4th
    *position. They are also embedded with a function
    *to move the tiles they created and remove them
    *at the appropriate place.
    *
    *They also hold a click event listener to be triggered
    *when a user clicks on a tile.
*/

const tileBeginingPosition = -26
const createTile1=(incr)=>{
                let tileN=document.createElement("button");
                let pos = tileBeginingPosition;
                node.appendChild(tileN);
                Object.assign(tileN.style,tileStyle);
                Object.assign(tileN.style,generalTileStyle);
                tileN.style.top=pos+"vh";
                tileN.style.left=0+"vw";
                let tileCheck1=false;
                //move the tile
                const move=()=>{
                    pos+=incr;
                    tileN.style.top=pos+"vh";
                    //when tile reaches end 
                    if(pos>100){
                        tileN.remove();
                        delete tileN;
                        delete incr;
                        delete tileCheck1;
                    }
                    window.requestAnimationFrame(move);
                }
                //**********
                move();
                tileN.onclick=()=>{
                    Object.assign(tileN.style,clickedTileStyle) 
                    tileCheck1=true;
                }
            }
const createTile2=(incr)=>{
                let tileN=document.createElement("button");
                let pos = tileBeginingPosition;
                node.appendChild(tileN);
                Object.assign(tileN.style,tileStyle);
                Object.assign(tileN.style,generalTileStyle);
                tileN.style.top=pos+"vh";
                tileN.style.left=25+"vw";
                let tileCheck2=false;
                //**********
                const move=()=>{
                    pos+=incr;
                    tileN.style.top=pos+"vh";
                    if(pos>100){
                        tileN.remove();
                        delete tileN;
                        delete incr;
                        delete tileCheck2;
                    }
                    window.requestAnimationFrame(move);
                }
                //**********
                move();
                tileN.onclick=()=>{
                    Object.assign(tileN.style,clickedTileStyle) 
                    tileCheck2=true;
                }
            }
const createTile3=(incr)=>{
                let tileN=document.createElement("button");
                let pos = tileBeginingPosition;
                node.appendChild(tileN);
                Object.assign(tileN.style,tileStyle);
                Object.assign(tileN.style,generalTileStyle);
                tileN.style.top=pos+"vh";
                tileN.style.left=50+"vw";
                let tileCheck3=false;
                //********
                const move=()=>{
                    pos+=incr;
                    tileN.style.top=pos+"vh";
                    if(pos>100){
                        tileN.remove();
                        delete tileN;
                        delete incr;
                        delete tileCheck3;
                    }
                    window.requestAnimationFrame(move);
                }
                //********
                move();
                tileN.onclick=()=>{
                    Object.assign(tileN.style,clickedTileStyle) 
                    tileCheck3=true;
                }
            }
const createTile4=(incr)=>{
                let tileN=document.createElement("button");
                let pos = tileBeginingPosition;
                node.appendChild(tileN);
                Object.assign(tileN.style,tileStyle);
                Object.assign(tileN.style,generalTileStyle);
                tileN.style.top=pos+"vh";
                tileN.style.left=75+"vw";
                let tileCheck4=false;
                //***********
                const move=()=>{
                    pos+=incr;
                    tileN.style.top=pos+"vh";
                    if(pos>100){
                        tileN.remove();
                        delete tileN;
                        delete incr;
                        delete tileCheck4;
                    }
                    window.requestAnimationFrame(move);
                }
                move();
                tileN.onclick=()=>{
                    Object.assign(tileN.style,clickedTileStyle) 
                    tileCheck4=true;
                }
            }
            
const createDbTilesA=(incr)=>{
                let tileN1=document.createElement("button");
                let tileN2=document.createElement("button");
                let pos = tileBeginingPosition;
                node.appendChild(tileN1);
                node.appendChild(tileN2);
                Object.assign(tileN1.style,tileStyle);
                Object.assign(tileN1.style,generalTileStyle);
                Object.assign(tileN2.style,tileStyle);
                Object.assign(tileN2.style,generalTileStyle);
                tileN1.style.top=pos+"vh";
                tileN2.style.top=pos+"vh";
                tileN1.style.left=0+"vw";
                tileN2.style.left=50+"vw";
                let tileDbACheck1=false;
                let tileDbACheck2=false;
                //***********
                const move=()=>{
                    pos+=incr;
                    tileN1.style.top=pos+"vh";
                    tileN2.style.top=pos+"vh";
                    if(pos>100){
                        tileN1.remove();
                        tileN2.remove();
                        delete tileN2;
                        delete tileN2;
                        delete incr;
                        delete tileDbACheck1;
                        delete tileDbACheck2;
                    }
                    window.requestAnimationFrame(move);
                }
                move();
                tileN1.onclick=()=>{
                    Object.assign(tileN1.style,clickedTileStyle) 
                    tileDbACheck1=true;
                }
                tileN2.onclick=()=>{
                    Object.assign(tileN2.style,clickedTileStyle) 
                    tileDbACheck2=true;
                }
            }
const createDbTilesB=(incr)=>{
                let tileN1=document.createElement("button");
                let tileN2=document.createElement("button");
                let pos = tileBeginingPosition;
                node.appendChild(tileN1);
                node.appendChild(tileN2);
                Object.assign(tileN1.style,tileStyle);
                Object.assign(tileN1.style,generalTileStyle);
                Object.assign(tileN2.style,tileStyle);
                Object.assign(tileN2.style,generalTileStyle);
                tileN1.style.top=pos+"vh";
                tileN2.style.top=pos+"vh";
                tileN1.style.left=25+"vw";
                tileN2.style.left=75+"vw";
                let tileDbBCheck1=false;
                let tileDbBCheck2=false;
                //***********
                const move=()=>{
                    pos+=incr;
                    tileN1.style.top=pos+"vh";
                    tileN2.style.top=pos+"vh";
                    if(pos>100){
                        tileN1.remove();
                        tileN2.remove();
                        delete tileN2;
                        delete tileN2;
                        delete incr;
                        delete tileDbBCheck1;
                        delete tileDbBCheck2;
                    }
                    window.requestAnimationFrame(move);
                }
                move();
                tileN1.onclick=()=>{
                    Object.assign(tileN1.style,clickedTileStyle) 
                    tileDbBCheck1=true;
                }
                tileN2.onclick=()=>{
                    Object.assign(tileN2.style,clickedTileStyle) 
                    tileDbBCheck2=true;
                }
            }
/*
    *written by Eze
    * open source
*/