const truthDare = [
    {
        type: "DARE",
        content: "SHAGIT UG I LOVE YOU EX SHAGIT UG I LOVE YOU EX SHAGIT UG I LOVE YOU EX SHAGIT UG I LOVE YOU EX SHAGIT UG I LOVE YOU EX"
    },
    {
        type: "TRUTH",
        content: "NGANUNG WALA MAN KA BALIKI?"
    },
    {
        type: "DARE",
        content: "SAYAW UG DAYANG-DAYANG"
    },
    {
        type: "TRUTH",
        content: "KINSAY CRUSH NIMO?"
    },
]
 let truthDareLength = 0
 let currentTruthDare
 let randomTruthDare = []

 function setAvailableTruthDare(){
     const totalTruthDare = truthDare.length
     for(let i = 0; i < totalTruthDare; i++){
        randomTruthDare.push(truthDare[i])
          
    
     }
    
 }
   
 const randomEvent = document.createElement("div")
 function firstRandom (){
    const randomTruthAndDare = document.getElementById("randomTruthDare")
    const truthDareIndex = randomTruthDare[Math.floor(Math.random() * randomTruthDare.length)]
    randomEvent.innerHTML = 
    `
    <div class="bg-gray-600 relative  shadow-2xl flex justify-center h-96 rounded-md z-30 w-full  left-0  px-2" >
       
       <div class="">
           <div>
            <h2 class="flex justify-center text-2xl font-semibold text-red-400 border-b-4 border-yellow-200 border-dashed mx-6 md:mx-20 py-6">${truthDareIndex.type}</h2>
           </div>
           <div class="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-full">    
            <p class="text-white text-center  flex justify-center px-3 font-medium pt-2   text-lg  items-center ">${truthDareIndex.content}</p> 
           </div>
       
       </div> 
        
         <div class="absolute flex z-10  justify-center items-center top-0 right-0 bottom-0 left-0 opacity-10">
             <img class="h-full object-cover object-center" src="img/undraw_Having_fun_re_vj4h.svg" alt="">
         </div>
    </div>
        

    `
    randomTruthAndDare.appendChild(randomEvent)
    const index1 = randomTruthDare.indexOf(truthDareIndex)
    randomTruthDare.splice(index1,1)
    truthDareLength++
    console.log(truthDareIndex)
 }
 

 window.onload = function(){
    setAvailableTruthDare()
     firstRandom()

 }

const yesBtn = document.getElementById("yesBtn")
yesBtn.addEventListener("click", () => {
    tryAgain.style.display="none"
    window.location.reload()
    
})
const next = document.getElementById("next")
const tryAgain = document.getElementById("tryAgain")

next.addEventListener("click", () => {
        if(truthDareLength === truthDare.length){
           tryAgain.style.display="flex"
    
    
        }else{
            setTimeout(loader)
            setTimeout(firstRandom,700)
        }
    })


const createLoader = document.createElement("span")
function loader(){

    const loader = document.getElementById("loader")
    loader.style.display="block"
    createLoader.innerHTML = 
    `<div class="flex bg-center bg-no-repeat bg-cover rounded-md outline-none   justify-center items-center h-full w-full" style="background-image: url(img/loader.gif);">
   
    </div>
   
    `
    loader.appendChild(createLoader)
    setTimeout(function(){
        loader.style.display="none"
    },2500)

}

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