
var a=0
function plus(){
    a++
    
   display.innerHTML = `$ . ${a}`

}
const display  = document.getElementById("oneTouchTwo")
function minus(){
    a--
    

    display.innerHTML = `$ . ${a}`
}

function zero(){
    
    a=0
    
    display.innerHTML = `$ . ${a}`
}
