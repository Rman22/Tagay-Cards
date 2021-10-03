
const infoBtn = document.getElementById("infoBtn")

infoBtn.addEventListener("click", () => {
    const info = document.getElementById("info")
    const displaySetting = info.style.display
    if(displaySetting =="block"){
        info.style.display="none"
    }
    else{
        info.style.display="block"
    }
})


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
result()

function result(){
    const toTap = document.getElementById("toTap")
    for(let i = 0; i < 12; i++){
        const displayResult = document.createElement("div")
        if(toTap != i){
            let popUp = document.getElementById("popUp")
           let chances = Math.random()
            if(chances < 0.5){
                displayResult.innerHTML =
                `
                <div class="flex relative h-24 w-24 rounded-full bg-gray-100 shadow-lg text-center justify-center items-center">
                    <p class="text-sm p-1">SHAT</p>
                    <button class="theResult z-20 h-24 w-24 border-4 shadow-2xl absolute bg-red-300 rounded-full  text-white text-xs top-0 right-0 left-0 bottom-0">Tap to Shat or Pass</button>
                    <div class="z-10 h-16 w-16 rounded-full bg-white animate-ping absolute ">

                    </div>
                </div>
                `
                toTap.appendChild(displayResult)
                const tapResult = displayResult.querySelector(".theResult")
                const createPopUp = document.createElement("div")
                tapResult.addEventListener("click", () => {
                   tapResult.style.display="none"
                   popUp.style.display="flex"
                   createPopUp.innerHTML = 
                   `
                   <div class=" h-64 w-64  bg-center flex items-center justify-center bg-cover" style="background-image: url(img/bgParty.png);">
                   <p class="text-center text-3xl flex items-center px-6 py-3 text-yellow-200 rounded-tr-full rounded-bl-full  bg-opacity-60 bg-gray-800">SHAT</p>
                  </div>
                   `
                   popUp.appendChild(createPopUp)
                   setTimeout(function(){
                       popUp.style.display="none"
                       createPopUp.innerHTML =''
                   },2000)
                  
                
                })
                
            }
            else{
                displayResult.innerHTML =
                `
                <div class="flex relative h-24 w-24 rounded-full bg-gray-100 shadow-lg text-center justify-center items-center">
                    <p class="text-sm p-1">PASS</p>
                    <button class="theResult z-20 h-24 w-24 border-4 shadow-2xl absolute bg-red-300 rounded-full  text-white text-xs top-0 right-0 left-0 bottom-0">Tap to Shat or Pass</button>
                    <div class="z-10 h-16 w-16 rounded-full bg-white animate-ping absolute ">

                    </div>
                </div>
                `
                toTap.appendChild(displayResult)
                const tapResult = displayResult.querySelector(".theResult")
                const createPopUp = document.createElement("div")
                tapResult.addEventListener("click", () => {
                   tapResult.style.display="none"
                   popUp.style.display="flex"
                   createPopUp.innerHTML = 
                   `
                   <div class=" h-64 w-64  bg-center flex items-center justify-center bg-cover" style="background-image: url(img/bgParty.png);">
                   <p class="text-center text-3xl flex items-center px-6 py-3 text-yellow-200 rounded-tr-full rounded-bl-full  bg-opacity-60 bg-gray-800">PASS</p>
                  </div>
                   `
                   popUp.appendChild(createPopUp)
                   setTimeout(function(){
                       popUp.style.display="none"
                       createPopUp.innerHTML =''
                   },2000)
                  
                }) 
              
            }
            
        }
    }
}

const restart = document.getElementById("restart")
const toTap = document.getElementById("toTap")
restart.addEventListener("click", () => {
    toTap.innerHTML=""
    result()
})