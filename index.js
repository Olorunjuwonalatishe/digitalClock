function startTime() {
 let hours = document.querySelector("#hours") 
 let minutes = document.querySelector("#minutes")
 let seconds = document.querySelector("#seconds") 
 let hour = parseInt(hours.textContent)

 let time = new Date()

 hours.textContent = time.getHours()
 minutes.textContent = time.getMinutes()
 seconds.textContent = time.getSeconds()

 let meridian = document.querySelector("#meridian")
 if (hour >= 12) {
    meridian.textContent = "PM"
 }

 
 if (minutes.textContent < 10) {
    
    minutes.textContent = "0" + minutes.textContent
   }
   
   if (seconds.textContent< 10) {
      seconds.textContent = "0" + seconds.textContent
   }
   
   if (hours.textContent < 10) {
      hours.textContent = "0" + hours.textContent
      
   }
   if (hours > 12) {
      hours = hour - 12
      hours.textContent = hours
   }
}

setInterval(startTime, 1000)