function make_album(name, title, numOfTracks) {
    if (numOfTracks === void 0) { numOfTracks = 0; }
    var album = {
        "Artist Name": name,
        "Album Title": title
    };
    if (numOfTracks != 0) {
        album["Number of tracks"] = numOfTracks;
    }
    return album;
}
console.log(make_album('Artist One', "Album Title One"));
console.log(make_album('Artist Two', "Album Title Two", 23));
console.log(make_album('Artist Three', "Album Title Three"));
