const container = document.querySelector('.container');
const image = document.querySelector('#music-image');
const audio = document.querySelector('#audio');
const title = document.querySelector('#music-details .title');
const singer = document.querySelector('#music-details .singer');
const prev = document.querySelector('#controls #prev');
const play = document.querySelector('#controls #play');
const next = document.querySelector('#controls #next');
const duration = document.querySelector('#duration');
const current_time = document.querySelector('#current-time');
const progress_bar = document.querySelector('#progress-bar');
const volume = document.querySelector('#volume');
const volume_bar = document.querySelector('#volume-bar');
const ul = document.querySelector('ul');


const player = new MusicPlayer(musicList);

window.addEventListener("load", ()=>{
    let music = player.getMusic();
    displayMusic(music);
    displayMusicList(player.musiclist);
    isPlayingNow();
});


function displayMusic(music){
    title.innerText = music.getName();
    singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
}

play.addEventListener('click',()=>{

    const isMusicPlay = container.classList.contains('playing');
    isMusicPlay ? pauseMusic() : playMusic();
});

prev.addEventListener('click',() =>{prevMusic();});

next.addEventListener('click',() =>{nextMusic();});

const prevMusic = () => {
    player.previous();
    let music = player.getMusic();
    displayMusic(music);
    isPlayingNow();
    playMusic();
}

const nextMusic = () => {
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    isPlayingNow();
    playMusic();
}

const pauseMusic = () => {
    container.classList.remove('playing');
    play.querySelector("i").classList = 'fa-solid fa-play'
    audio.pause();
}

const playMusic = () => {
    container.classList.add('playing');
    play.querySelector("i").classList = 'fa-solid fa-pause'
    audio.play();
}


audio.addEventListener('loadedmetadata',()=>{
    duration.textContent = calculateTime(audio.duration);
    progress_bar.max = Math.floor(audio.duration);
    playMusic();
});


audio.addEventListener('timeupdate',()=>{
    progress_bar.value = Math.floor(audio.currentTime);
    current_time.textContent = calculateTime(progress_bar.value);
});

progress_bar.addEventListener('input', ()=>{
    current_time.textContent = calculateTime(progress_bar.value);
    audio.currentTime = progress_bar.value;
});


const calculateTime = (duration) => {
    let minute = Math.floor(duration / 60);
    let second = Math.floor(duration % 60);
    returnSecond = second < 10 ? "0" + second : second;
    let returnStr = minute + ':' + returnSecond;

    return returnStr;
}

let muteState = "unmuted";
volume.addEventListener('click', ()=>{
    if(muteState === "unmuted"){
        audio.muted = true;
        volume.classList = 'fa-solid fa-volume-mute';
        muteState = "muted";
        volume_bar.value = 0;
    }else{
        audio.muted = false;
        volume.classList = 'fa-solid fa-volume-high';
        muteState = "unmuted";
        volume_bar.value = 100;
    }
});

volume_bar.addEventListener('input', (e) =>{
    const val = e.target.value;
    audio.volume = val / 100;
    if(val < 50){
        if(val == 0)
        {
            volume.classList = 'fa-solid fa-volume-off';    
        }
        else{
            volume.classList = 'fa-solid fa-volume-low';
        }
    }
    else{
        volume.classList = 'fa-solid fa-volume-high';
    }
});

const displayMusicList = (list) =>{
    list.forEach((music,i) => {
        let liTag = `
        <li li-index='${i}' onClick="selectMusic(this)" class="list-group-item d-flex justify-content-between align-items-center">
            <span>${music.getName()}</span>
            <span id="music-${i}" class="badge bg-primary rounded-pill"></span>
            <audio class="music-${i}" src = "mp3/${music.file}"></audio>
        </li>
        `;

        ul.insertAdjacentHTML("beforeend", liTag);

        let liAudioDuration = ul.querySelector(`#music-${i}`);
        let liAudioTag = ul.querySelector(`.music-${i}`);

        liAudioTag.addEventListener('loadeddata', () => {
            liAudioDuration.textContent = calculateTime(liAudioTag.duration);
        });

    });

} 


const selectMusic = (element) =>{
    player.index = element.getAttribute('li-index');
    element.classList.add('playing');
    displayMusic(player.getMusic());
    playMusic();
    isPlayingNow();
}

const isPlayingNow = () => {
    for(let li of ul.querySelectorAll('li')){
        if(li.classList.contains('playing')){
            li.classList.remove('playing');
        }

        if(li.getAttribute('li-index') == player.index){
            li.classList.add('playing');
        }
    }
}


audio.addEventListener('ended', () => {
    nextMusic();
});