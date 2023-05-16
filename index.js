function startTime() {
 let hours = document.querySelector("#hours") 
 let minutes = document.querySelector("#minutes")
 let seconds = document.querySelector("#seconds") 
 let hour = hours.innerHTML

 let time = new Date()

 hours.innerHTML = time.getHours()
 minutes.innerHTML = time.getMinutes()
 seconds.innerHTML = time.getSeconds()

 let meridian = document.querySelector("#meridian")
 if (hour >= 12) {
    meridian.innerHTML = "PM"
 }

 if (hour > 12) {
    hour = hour - 12
    hours.innerHTML = hour
 }

 if (minutes.innerHTML < 10) {
    
    minutes.innerHTML = "0" + minutes.innerHTML
}

if (seconds.innerHTML < 10) {
    seconds.innerHTML = "0" + seconds.innerHTML
}

if (hours.innerHTML < 10) {
     hours.innerHTML = "0" + hours.innerHTML
    
 }
}

setInterval(startTime, 1000)