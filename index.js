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

 
 if (minutes.innerHTML < 10) {
    
    minutes.innerHTML = "0" + minutes.innerHTML
   }
   
   if (seconds.innerHTML< 10) {
      seconds.innerHTML = "0" + seconds.innerHTML
   }
   
   if (hour < 10) {
      hours = "0" + hours.innerHTML
      
   }
   if (hour > 12) {
      hour = hour - 12
      hours = hours.innerHTML
   }
}

setInterval(startTime, 100)