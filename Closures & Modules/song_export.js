const SongsManager = function () {
    let songs = {};
    const addSong = function (name, url) {
        songs[name] = url.replace('https://www.youtube.com/watch?v=', '');
    }

    const getSong = function (name) {
        console.log('https://www.youtube.com/watch?v=' + songs[name])
    }
    return { addSong, getSong };
}

module.exports = SongsManager;







