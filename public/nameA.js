const nameA = [
    {
        type: "PLACES",
        content: "LUGAR SA CEBU NGA NAG START SA LETTER B"
    },
    {
        type: "ANIMALS",
        content: "HAYOPAN NGA NAG END UG LETTER S"
    },
    {
        type: "THINGS",
        content: 'BUTANG NGA NAGSUGOD UG "SA"'
    },
    {
        type: "NAMES",
        content: "NGALAN SA MGA PRESIDENTE"
    },
]
 let nameALength = 0
 let randomNameA = []

 function setAvailableNameA(){
     const totalNameA = nameA.length
     for(let i = 0; i < totalNameA; i++){
        randomNameA.push(nameA[i])
     }
 }
   
 const randomEvent = document.createElement("div")
 function firstRandom (){
    const randomNameAs = document.getElementById("randomNameAs")
    const nameAIndex = randomNameA[Math.floor(Math.random() * randomNameA.length)]
    randomEvent.innerHTML = 
    `
    <div class="bg-gray-600 bg-white relative  shadow-2xl flex relative justify-center h-96 rounded-md z-30 w-full absolute  left-0  px-2" >
       
       <div class="">
           <div>
            <h2 class="flex justify-center text-2xl font-semibold text-red-400 border-b-4 border-yellow-200 border-dashed mx-6 md:mx-20 py-6">${nameAIndex.type}</h2>
           </div>
           <div class="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-full">    
            <p class="text-white text-center  flex justify-center px-3 font-medium pt-2 px-1  text-lg flex items-center justify-center">${nameAIndex.content}</p> 
           </div>
       
       </div> 
        
         <div class="absolute flex z-10  justify-center items-center top-0 right-0 bottom-0 left-0 opacity-10">
             <img class="h-full object-cover object-center" src="img/undraw_Having_fun_re_vj4h.svg" alt="">
         </div>
    </div>
        

    `
    randomNameAs.appendChild(randomEvent)
    const index1 = randomNameA.indexOf(nameAIndex)
    randomNameA.splice(index1,1)
    nameALength++
    console.log(nameAIndex)
 }
 

 window.onload = function(){
    setAvailableNameA()
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
        if(nameALength === nameA.length){
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