const noOfsongs: number = 5;
const playlist: number[] = [1, 1, 2, 2, 4];
const countArr: number[] = [];
let k: number = 0;

countArr.forEach(i => i = 0);
console.log("countArr => ", countArr);

function artistsCollections() {
    playlist.forEach((index) => countArr[index]++ );
    return countArr;
}

function famousArtists() {
    countArr.forEach(
    (index) => {
        if (countArr[index - 1] >= countArr[index - 2])
        k = index; 
    });
    return k;
}

console.log(artistsCollections());
console.log(famousArtists()); 
