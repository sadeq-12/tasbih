


let tasbih = document.querySelector("#tasbih")
let incrementButton = document.querySelector("#Incerementbtn")
let resetButton = document.querySelector("#resetbtn")



let initialvalue = 0

incrementButton .addEventListener("click" , function(){
    initialvalue++
    tasbih.innerHTML = initialvalue
})



resetButton.addEventListener("click" , function(){
    initialvalue = 0
    tasbih.innerHTML = initialvalue
})