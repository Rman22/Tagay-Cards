const playAudio = document.getElementById("playAudio")
const audio = document.getElementById("audio")
const toPlay = document.getElementById("toPlay")
const toPause = document.getElementById("toPause")
playAudio.addEventListener("click", () => {
  
    if(audio.paused){
        audio.play()
        toPlay.style.display="block"
        toPause.style.display="none"
    }
    else{
        audio.pause()
        toPlay.style.display="none"
        toPause.style.display="block"
      
    }
    
})

const about = document.getElementById("about")
const aboutBtn = document.getElementById("aboutBtn")
console.log(aboutBtn)
const closeBtn = document.getElementById("closeBtn")

aboutBtn.addEventListener("click", () => {
    about.style.display="block"
})
closeBtn.addEventListener("click", () => {
    about.style.display="none"
})

