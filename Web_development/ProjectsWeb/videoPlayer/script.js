const video = document.getElementById("video");
const playpause = document.getElementById("play-pause");
const frwd = document.getElementById("skip-10");
const bkwrd = document.getElementById("skipminus-10");
const volume = document.getElementById("volume");
const mutebtn = document.getElementById("mute");
const videoContainer = document.querySelector(".video-container");
const controls = document.querySelector(".controls");
const progressBar = document.querySelector(".progress-bar");
const playbackline = document.querySelector(".playback-line");
const currentTimeRef = document.getElementById("current-time");
const maxDuration = document.getElementById("max-duration");

const timeFormatter = (timeInput) => {
  let minute = Math.floor(timeInput / 60);
  minute = minute < 10 ? "0" + minute : minute;
  let second = Math.floor(timeInput % 60);
  second = second < 10 ? "0" + second : second;
  return `${minute}: ${second}`;
};

// play-pause
playpause.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playpause.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    video.pause();
    playpause.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

let isPlaying = false;

// function to toggle play/pause
function togglePlayPause() {
  if (isPlaying) {
    video.pause();
    playpause.innerHTML = '<i class="fa-solid fa-play"></i>';
  } else {
    video.play();
    playpause.innerHTML = '<i class="fa-solid fa-pause"></i>';
  }
  isPlaying = !isPlaying;
}

document.addEventListener("keydown", function (event) {
  if (event.key === 32 || event.key === " ") {
    event.preventDefault();

    //prevent scrolling the page down
    togglePlayPause();
  }
});

// Event listener for the video to
// update the isPlaying Flag
video.addEventListener("play", () => {
  isPlaying = true;
});

video.addEventListener("pause", () => {
  isPlaying = false;
});

video.addEventListener("ended", () => {
  playpause.innerHTML = '<i class="fa-solid fa-play"></i>';
});

// forword 5 sec or backword 5 sec

frwd.addEventListener("click", () => {
  video.currentTime += 5;
});

bkwrd.addEventListener("click", () => {
  video.currentTime -= 5;
});

// Mute and unmute button
mutebtn.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    mutebtn.innerHTML = '<i class = "fas fa-volume-up"></i>';
    volume.value = video.volume;
  } else {
    video.muted = true;
    mutebtn.innerHTML = '<i class = "fa-solid fa-volume-xmark"></i>';
    volume.video = 0;
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "M" || event.key === "m") {
    event.preventDefault();
    if (video.muted) {
      video.muted = false;
      mutebtn.innerHTML = '<i class = "fas fa-volume-up"></i>';
      volume.value = video.volume;
    } else {
      video.muted = true;
      mutebtn.innerHTML = '<i class = "fa-solid fa-volume-xmark"></i>';
      volume.video = 0;
    }
  }
});

volume.addEventListener("input", () => {
    video.volume = volume.value;
    if(video.volume === 0)
    {
        mutebtn.innerHTML = '<i class = "fa-solid fa-volume-xmark"></i>'
    }else{
        mutebtn.innerHTML = '<i class = "fas fa-volume-up"></i>';
    }
})


// hide or unhide controllers div
videoContainer.addEventListener("mouseenter", () => {
    controls.style.opacity = 1
})

videoContainer.addEventListener("mouseleave", () => {
    controls.style.opacity = 0;
})

// update the playback line as the video plays 
video.addEventListener("timeupdate", (c) => {
    const currentTime = video.currentTime
    const duration = video.duration;
    const percentage = (currentTime /duration) * 100;
    progressBar.style.width = percentage + "%"
})

video.addEventListener("ended", () => {
    progressBar.style.width = "0%"
})

setInterval(() => { 
    currentTimeRef.innerHTML = timeFormatter(video.currentTime); 
    maxDuration.innerText = timeFormatter(video.duration); 
}, 1); 
  
playbackline.addEventListener("click", (e) => { 
    let timelineWidth = playbackline.clientWidth; 
    video.currentTime = (e.offsetX / timelineWidth) * video.duration; 
});