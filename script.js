var body=document.querySelector("body")
var currMode="light"
var modeImage=document.querySelector('#modeImage')
function changeMode(){
    if(currMode==='light'){
        body.classList.add('dark')
        currMode='dark'
        modeImage.src='./media/sun.png'
        console.log(currMode)
    }else{
        body.classList.remove('dark')
        currMode='light'
        modeImage.src='./media/moon.png'
        console.log(currMode)
    }
    // if(currMode==='light'){
    //     body.style.backgroundColor='black'
    //     body.style.color='white'
    //     currMode='dark'
    //     console.log(currMode)
    // }else{
    //     body.style.backgroundColor='white'
    //     body.style.color='black'
    //     currMode='light'
    //     console.log(currMode)
    // }
}