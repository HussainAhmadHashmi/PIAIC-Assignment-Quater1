"use strict";
// Question 40: Make a function make Album () and write parameters artist name, album title and tracks as an option and function return as object. And check if track have than print otherwise only artist and album name print.
function makeAlbum(artistName, albumTitle, tracks) {
    // return{
    //     artist:artistName,
    //     album:albumTitle
    // }
    const albumconstant = {
        artist: artistName,
        album: albumTitle
    };
    // Add tracks to the object if the parameter is provided
    if (tracks !== undefined) {
        albumconstant.tracks = tracks;
    }
    return albumconstant;
}
// Example usage
const album1 = makeAlbum('Artist1', 'POP');
console.log(album1);
const album2 = makeAlbum('Artist2', 'Rock');
console.log(album2);
const album3 = makeAlbum('Artist3', 'Rap', 22);
console.log(album3);
