
console.log("Welcome to Spotify");

// Initialize the Variables

let songIndex = 0;
let audioElement = new Audio("songs/0.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songsItem = Array.from(document.getElementsByClassName('songItem'));
let masterSong = document.getElementById('masterSong');

let songs = [
  {
    songName: "Safar - PagalWorld.cool",
    filePath: "songs/0.mpeg",
    coverPath: "CoverImg.png",
  },
  {
    songName: "Piya Aaye Na ",
    filePath: "songs/1.mpeg",
    coverPath: "CoverImg.png",
  },
  {
    songName: "Thoda Thoda Pyar",
    filePath: "songs/2.mpeg",
    coverPath: "CoverImg.png",
  },
  {
    songName: "Believer",
    filePath: "songs/3.mpeg",
    coverPath: "CoverImg.png",
  },
  {
    songName: "Thunder Thunder",
    filePath: "songs/4.mpeg",
    coverPath: "CoverImg.png",
  },
  {
    songName: "Shape of You ",
    filePath: "songs/5.mpeg",
    coverPath: "CoverImg.png",
  },
];

songsItem.forEach ((element, i) => {
   
    element.getElementsByClassName("11")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioElement.play();

//Handle play/pause click

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

// Listen To Events

audioElement.addEventListener("timeupdate", () => {
 

  // update seekbar

  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  console.log(progress);
  myProgressBar.value = progress;

});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration /100 ;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e) => {
          console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSong.innerText= songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');


    })
})

document.getElementById('for').addEventListener('click', () =>{
    if(songIndex>=5){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSong.innerText= songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('back').addEventListener('click', () =>{
    if(songIndex<=1){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSong.innerText= songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})