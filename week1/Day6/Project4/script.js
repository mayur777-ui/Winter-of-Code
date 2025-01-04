let menu = document.querySelector(".triple-dot");
let menuList = document.querySelector(".song-list");
let play = document.querySelector(".play");
let songname = document.querySelector(".song-name");
let songDur = document.querySelector(".song-duration");
let currentSongIndex = 0; 
let songs = []; 
let currentAudio = null;
let currentSong = null;
let progress = document.querySelector(".progress");
let circle = document.querySelector(".circle");




function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
      return "00:00";
    }
  
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
  
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  
    return `${formattedMinutes}:${formattedSeconds}`;
  }


let getSong = async() => {
    let a = await fetch("http://127.0.0.1:5500/week1/Day6/Project4/songs/");
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songsList = [];
    // document.body.appendChild(div);
    // console.log(as);
    // console.log(as[4].href.split("/songs/")[1]);
    for (let i = 0; i < as.length; i++) {
      const element = as[i];
      if (element.href.endsWith(".mp3")) {
        songsList.push(element.href.split("/songs/")[1]);
      }
    }
    // console.log(songs);
    currentSong = songsList[currentSongIndex];
    return songsList;
  }



let initializeSongs = async () => {
    songs = await getSong();
    getSong().then((songs) => {
        let song = songs[currentSongIndex];
        let songName = decodeURIComponent(song);
        songname.innerHTML = songName;
        
    });


};




  
  let showmenu = () => {
    menu.innerHTML = '<i onclick="closemenu()" class="fa fa-times" aria-hidden="true"></i>';
    menuList.style.display = "block";

    getSong().then((songs) => {
        let ul = document.createElement("ul");

        for (let i = 0; i < songs.length; i++) {
            try {
                // Decode and log the song name
                let element = decodeURIComponent(songs[i]);
                // console.log("Decoded song:", element);
                let li = document.createElement("li");
                li.innerHTML = element;
                ul.appendChild(li);
            } catch (error) {
                console.error("Error decoding song:", songs[i], error);
            }
        }
        menuList.appendChild(ul);
    });
};


let closemenu = ()=>{
    // menu.style.display = "block";
    menu.innerHTML = '<i onclick="showmenu()" class="fa fa-bars" aria-hidden="true"></i>';
    menuList.style.display = "none";
}



let playSong = ()=>{
    if(!songs.length){
        alert("No songs found");
        return;
    }

    if(currentSongIndex >= songs.length){
        currentSongIndex = 0;
    }

    let song = songs[currentSongIndex];
    currentSong = song;
    let playUri = `http://127.0.0.1:5500/week1/Day6/Project4/songs/${song}`;
    if (currentAudio) {
        currentAudio.pause(); // Pause the current song if playing
    }

    currentAudio = new Audio(playUri);
    currentAudio.play();
    play.innerHTML = '<i onclick="pauseSong()" class="fa fa-pause" aria-hidden="true"></i>';
    currentAudio.onloadedmetadata = () => {
        let duration = currentAudio.duration;
        songDur.innerHTML = `0:00/${secondsToMinutesSeconds(duration)}`;
    };
    currentAudio.ontimeupdate = () => {
        let current = currentAudio.currentTime;
        let duration = currentAudio.duration;
        songDur.innerHTML = `${secondsToMinutesSeconds(current)} / ${secondsToMinutesSeconds(duration)}`;
    };
    let songName = decodeURIComponent(song);
    songname.innerHTML = songName;
    // getDuration();
    // play.remove();
    // document.querySelector(".song").play();
    // currentSongIndex++;
}

let pauseSong = ()=>{
    if (currentAudio) {
        currentAudio.pause(); // Pause the current song if playing
        play.innerHTML = '<i onclick="playSong()" class="fa fa-play" aria-hidden="true"></i>';
    }
    // play.remove();
    // document.querySelector(".song").pause();
}


let nextSong = ()=>{
    let next = document.querySelector(".next");
    if(currentSongIndex >= songs.length){
        currentSongIndex = 0;
    }   
    currentSongIndex++;
    playSong();
}

let prevSong = ()=>{
    let prev = document.querySelector(".prev");
    if(currentSongIndex <= 0){
        currentSongIndex = songs.length;
    }
    currentSongIndex--;
    playSong();
}

// let getDuration = () =>{
//     let duration = currentAudio.duration;
//     console.log(duration.text());
// }

document.querySelector(".song-volume input").addEventListener("input", (e) => {
    if (!currentAudio) {
        console.error("No song is currently playing.");
        return;
    }

    // Convert range [0-100] to [0-1]
    let volume = parseInt(e.target.value) / 100;
    currentAudio.volume = volume;
});

const initializeVolumeSlider = () => {
    const volumeSlider = document.querySelector(".song-volume input");
    if (currentAudio) {
        volumeSlider.value = currentAudio.volume * 100; // Convert [0-1] to [0-100]
    }
};

initializeSongs();