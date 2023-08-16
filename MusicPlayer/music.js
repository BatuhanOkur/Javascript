class Music{
    constructor(title, singer, img, file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName(){
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("This I Love", "Guns N' Roses", "this-i-love.png", "this-i-love.mp3"),
    new Music("Fade To Black", "Metallica", "fade-to-black.png", "fade-to-black.mp3"),
    new Music("One", "Metallica", "one.png", "one.mp3")
];