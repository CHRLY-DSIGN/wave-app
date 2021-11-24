
function play() {
    let button1 = document.getElementById("button1").value
    console.log('id de play', button1);
    let audio = document.getElementById(button1);
    audio.play()
}

let playBtn = document.getElementById("botondeplay")
playBtn.addEventListener("click", () => play())



function play2() {
    let diskRight = document.getElementById("diskRight").value
    let audio2 = document.getElementById(diskRight);
    audio2.play()
}

let playBtn2 = document.getElementById("track02")
playBtn2.addEventListener("click", () => play2())



function play3() {
    let cue01 = document.getElementById("cue01").value
    let audio3 = document.getElementById(cue01);
    audio3.play()
}

let playBtn3 = document.getElementById("track03")
playBtn3.addEventListener("click", () => play3())



function play4() {
    let cue02 = document.getElementById("cue02").value
    let audio4 = document.getElementById(cue02);
    audio4.play()
}

let playBtn4 = document.getElementById("track04")
playBtn4.addEventListener("click", () => play4())


