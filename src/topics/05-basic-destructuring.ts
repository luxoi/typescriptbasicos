interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details:{
        author: "ED Sheeran",
        year: 2015
    }
};

const {author} = audioPlayer.details;

const { song:anotherSong, songDuration:duration } = audioPlayer;

console.log('Song: ', anotherSong, 
            'Duration: ',duration);

console.log('author: ',author);


const dbz: string[] = ['gokuy', 'vegeta', 'trunk'];



console.log('Personaje 3:', dbz[3] || 'Personaje no encontrado');


export {};