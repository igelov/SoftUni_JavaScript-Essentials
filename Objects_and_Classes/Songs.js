function songs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let n = input.shift();
    let songs = [];
    for (let i = 0; i < n; i++) {
        let currentInput = input.shift();
        let [typeList, name, time] = currentInput.split(`_`);
        songs.push(new Song(typeList, name, time));
    }

    let wantedList = input.shift();
    for (const song of songs) {
        if (song.typeList === wantedList || wantedList ===`all`) {
            console.log(song.name);
        }
    }
}

songs(
    [4,
        'favourite_DownTown_3:14',
        'listenLater_Andalouse_3:24',
        'favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48',
        'listenLater']

);