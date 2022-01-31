//import Plyr from "plyr";
var soundDiv = document.getElementById('sound');
var inp = document.getElementById("media");
var vinp = document.getElementById("media").value;
var sub = document.getElementById("sub");
var vsub = document.getElementById("sub").value;
var type;

function get_url_extension(url) {
    var file = (/[.]/.exec(url)) ? /[^.]+$/.exec(url) : undefined;
    return file[0].split("?")[0];
}
inp.addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        play();
    }
});
sub.addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        play();
    }
});

function play() {
    var ound = document.getElementById('audio');
    if (ound != null) ound.remove();
    vinp = document.getElementById("media").value;
    console.log(get_url_extension(vinp));
    if (get_url_extension(vinp) == "mp4" | get_url_extension(vinp) == "mkv") type = "video";
    if (get_url_extension(vinp) == "mp3") type = "audio";
    else type = "video";
    console.log(vinp);
    var sound = document.createElement(type);
    sound.setAttribute("id", "audio");
    sound.setAttribute("src", vinp);
    sound.setAttribute("controls", "")
    sound.setAttribute("height", "auto");
    sound.setAttribute("width", "auto");
    soundDiv.appendChild(sound);
    if (vsub != null) {
        vsub = document.getElementById("sub").value;
        var sube = document.createElement("track");
        sube.setAttribute("src", vsub);
        sube.setAttribute("kind", "captions");
        sube.setAttribute("srclang", "fa");
        sube.setAttribute("label", "زیرنویس");
        sound.appendChild(sube);
    }
    var controls = [
        'play-large', // The large play button in the center
        'rewind', // Rewind by the seek time (default 10 seconds)
        'play', // Play/pause playback
        'fast-forward', // Fast forward by the seek time (default 10 seconds)
        'progress', // The progress bar and scrubber for playback and buffering
        'current-time', // The current time of playback
        'duration', // The full duration of the media
        'mute', // Toggle mute
        'volume', // Volume control
        'captions', // Toggle captions
        'settings', // Settings menu
        'pip', // Picture-in-picture (currently Safari only)
        'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
        'fullscreen' // Toggle fullscreen
    ];
    Plyr.setup("#audio", { controls });


}