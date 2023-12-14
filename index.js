let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let temp = 0

function increment() {
    count += 1
    countEl.textContent = count
        if(count >15){
        window.location.href = "stop.html"
    }
}

function save() {
    temp+=1
    if(temp >4){
        window.location.href = "stop.html"
    }
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
