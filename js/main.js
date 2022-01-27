var soundDiv = document.getElementById('sound');
var inp;
var type;

function get_url_extension(url) {
    var file = (/[.]/.exec(url)) ? /[^.]+$/.exec(url) : undefined;
    return file[0].split("?")[0];
}

function play() {
    var ound = document.getElementById('audio');
    if (ound != null) ound.remove();
    inp = document.getElementById("inp").value;
    console.log(get_url_extension(inp));
    if (get_url_extension(inp) == "mp4" | get_url_extension(inp) == "mkv") type = "video";
    if (get_url_extension(inp) == "mp3") type = "audio";
    console.log(inp);
    var sound = document.createElement(type);
    sound.setAttribute("id", "audio");
    sound.setAttribute("src", inp);
    sound.setAttribute("controls", "")
    soundDiv.appendChild(sound);

}