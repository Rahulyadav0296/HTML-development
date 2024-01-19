console.log("Welcome to spotify");

let songindex = 0
let audioElement = new Audio("1.mp3")
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById("gif")
let songItems = document.getElementsByClassName("songItems")
let songs = [
    {
        songs: "Rabba - salam-e-ishq",
        filePath: "1.mp3",
        coverPath: "1.jpg",
    },
    {
        songs: "Arijit - salam-e-ishq",
        filePath: "2.mp3",
        coverPath: "2.jpg",
    },
    {
        songs: "Khuda ka sukrana - salam-e-ishq",
        filePath: "3.mp3",
        coverPath: "3.jpg",
    },
    {
        songs: "dua hai tu hai - salam-e-ishq",
        filePath: "4.mp3",
        coverPath: "4.jpg",
    },
    {
        songs: "bajate raho - salam-e-ishq",
        filePath: "5.mp3",
        coverPath: "5.jpg",
    },
    {
        songs: "salam-e-ishq",
        filePath: "6.mp3",
        coverPath: "6.jpg",
    },
    {
        songs: "salam-e-ishq",
        filePath: "7.mp3",
        coverPath: "7.jpg",
    },
    {
        songs: "salam-e-ishq",
        filePath: "8.mp3",
        coverPath: "8.jpg",
    },
    {
        songs: "salam-e-ishq",
        filePath: "9.mp3",
        coverPath: "9.jpg",
    },
    {
        songs: "salam-e-ishq",
        filePath: "10.mp3",
        coverPath: "10.jpg",
    },
]

songs.forEach((element, i) => {
    console.log(element, i);
    document.getElementsByTagName("img")[0].src = songs[i].filePath
})

// Handle Play/pause Click
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})

// listen to events 
audioElement.addEventListener("timeupdate", () => {
    console.log('timeupdate');
    //seekbar
    Progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(Progress);
    myProgressBar.value = Progress
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime =myProgressBar.value * audioElement.duration/ 100;
})

