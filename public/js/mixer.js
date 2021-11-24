// const tracksArr = []
// const audios = document.querySelectorAll("audio")

/* const { application } = require("express") */

// document.querySelectorAll("audio").forEach(audio => tracksArr.push(audio.id))
// console.log(tracksArr)

/* const playBtn = document.querySelector("#botondeplay")
console.log(playBtn) */
//playBtn.onclick(console.log("hola"))

function play() {
    let audio = document.getElementById("1418762272");
    audio.play()
}

let playBtn = document.getElementById("botondeplay")
playBtn.addEventListener("click", play)


