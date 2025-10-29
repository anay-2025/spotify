console.log("welcome to javascript");
let masterPlay = document.querySelector("#masterPlay");
let audioEle = new Audio("one_Love .mp3");
let gif = document.querySelector("#gif");
let playBar = document.querySelector("#playBar");
let songIndex = 4;
let songItems = document.querySelectorAll(".songItem");


let songs = [
    {songName:"Bariye Dao", filePath:"songs/1.mp3", coverPath:"cover/1.jpg", duration:"04:20"},
    {songName:"Espresso", filePath:"songs/2.mp3", coverPath:"cover/2.jpg", duration:"03:16"},
    {songName:"Humdum Humdum", filePath:"songs/3.mp3", coverPath:"cover/3.jpg", duration:"04:03"},
    {songName:"Suzume No Tojimori", filePath:"songs/4.mp3", coverPath:"cover/4.jpg", duration:"03:01"},
    {songName:"One Love", filePath:"one_Love .mp3", coverPath:"cover1.png", duration:"03:56"},
    {songName:"We Don't Talk Anymore", filePath:"songs/5.mp3", coverPath:"cover/5.jpg", duration:"03:37"},
]

const makeaAllPlays = () => {
    document.querySelectorAll(".playBtn").forEach((ele) => {
        ele.setAttribute("class", "fa-solid fa-play playBtn");
    })
}

songItems.forEach((element, i) => {
    element.querySelector("img").src = songs[i].coverPath;
    element.querySelector(".songName").innerText = songs[i].songName;
    element.querySelector(".timeStamp").innerText = songs[i].duration;
    let playBtn = element.querySelector(".playBtn");
    playBtn.addEventListener("click", () => {
        if(songIndex == i) {
            if(!audioEle.paused) {
                audioEle.pause();
                makeaAllPlays();
                masterPlay.setAttribute("class", "fa-solid fa-play");
                gif.style.opacity = 0;
            }
            else {
                audioEle.play();
                playBtn.setAttribute("class", "fa-solid fa-pause playBtn");
                masterPlay.setAttribute("class", "fa-solid fa-pause");
                gif.style.opacity = 1;
            }
        }
        else {
            songIndex = i;
            audioEle.src = songs[i].filePath;
            audioEle.currentTime = 0;
            audioEle.play();
            makeaAllPlays();
            playBtn.setAttribute("class", "fa-solid fa-pause playBtn");
            masterPlay.setAttribute("class", "fa-solid fa-pause");
            let songInfo = document.querySelector(".songInfo");
            songInfo.querySelector("b").innerText = songs[i].songName;
            gif.style.opacity = 1;
        }
    })
})


masterPlay.addEventListener("click", () => {
    let currentPlayBtn = songItems[songIndex].querySelector(".playBtn");
    if(audioEle.paused) {
        audioEle.play();
        masterPlay.setAttribute("class", "fa-solid fa-pause");
        currentPlayBtn.setAttribute("class", "fa-solid fa-pause playBtn");
        gif.style.opacity = 1;
    } else {
        audioEle.pause();
        masterPlay.setAttribute("class", "fa-solid fa-play");
        currentPlayBtn.setAttribute("class", "fa-solid fa-play playBtn");
        gif.style.opacity = 0;
    }
})
audioEle.addEventListener("timeupdate", () => {
    let progress = ((audioEle.currentTime / audioEle.duration) * 100);
    playBar.value = progress;   // bacause value is its property not a styling css property. ***
})

playBar.addEventListener("change", () => {
    audioEle.currentTime = ((playBar.value * audioEle.duration) / 100);
})

let leftPlay = document.querySelector("#leftPlay");
leftPlay.addEventListener("click", () => {
    songIndex--;
    if(songIndex < 0) {
        songIndex = 5;
    }
    audioEle.src = songs[songIndex].filePath;
    audioEle.currentTime = 0;
    let songInfo = document.querySelector(".songInfo");
    songInfo.querySelector("b").innerText = songs[songIndex].songName;
    makeaAllPlays();
    audioEle.play();
    masterPlay.setAttribute("class", "fa-solid fa-pause");
    let currentPlayBtn = songItems[songIndex].querySelector(".playBtn");
    currentPlayBtn.setAttribute("class", "fa-solid fa-pause playBtn");
    gif.style.opacity = 1;
})

let rightPlay = document.querySelector("#rightPlay");
rightPlay.addEventListener("click", () => {
    songIndex++;
    if(songIndex > 5) {
        songIndex = 0;
    }
    audioEle.src = songs[songIndex].filePath;
    audioEle.currentTime = 0;
    let songInfo = document.querySelector(".songInfo");
    songInfo.querySelector("b").innerText = songs[songIndex].songName;
    makeaAllPlays();
    audioEle.play();
    masterPlay.setAttribute("class", "fa-solid fa-pause");
    let currentPlayBtn = songItems[songIndex].querySelector(".playBtn");
    currentPlayBtn.setAttribute("class", "fa-solid fa-pause playBtn");
    gif.style.opacity = 1;
})





