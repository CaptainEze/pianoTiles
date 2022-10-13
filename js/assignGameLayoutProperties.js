
const assignLayoutStyleForIndex =()=>{
    window.onload=()=>{
        let bodyCss = document.getElementsByTagName("link");
        bodyCss[0].setAttribute('href',indexLayoutStyle);
    }
}

const assignLayoutStyleForGamePage =()=>{
    window.onload=()=>{
        let startBtn = document.getElementById("but");
        let bodyCss = document.getElementsByTagName("link");
        bodyCss[0].setAttribute('href',gamePageLayoutStyle);
        Object.assign(startBtn.style, startBtnStylePurple);
    }
}