// Generate random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"

    for(let i=0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

// Event listeners

startBtn = document.querySelector("#start")
stopBtn = document.querySelector("#stop")
colorCode = document.querySelector(".colorCode")

startBtn.addEventListener('click', startColorChange)
stopBtn.addEventListener('click', stopColorChange)
startBtn.addEventListener('click', showColorCode)


