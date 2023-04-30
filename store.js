function diettype() {
    let diet = "omnivore"
    let omniInput = document.getElementById("omni")
    let vegInput = document.getElementById("veg")
    let veganInput = document.getElementById("vegan")
    let clsInput = document.getElementById("cls")
  
  
    if (omniInput.checked) {
      diet = "omnivore"
    } else if (vegInput.checked) {
      diet = "vegetarian"
    } else if (veganInput.checked) {
      diet = "vegan"}
      else if(clsInput.checked){
        localStorage.clear()
      }
  
    localStorage.setItem("diet", diet);
  }
function path(){
    let diet = localStorage.getItem("diet")
    document.getElementById("Monday").href = `/CW-Webtech.github.io/${diet} pages/Monday.html`
    document.getElementById("Tuesday").href = `/CW-Webtech.github.io/${diet} pages/Tuesday.html`
    document.getElementById("Wednesday").href = `/CW-Webtech.github.io/${diet} pages/Wednesday.html`
    document.getElementById("Thursday").href = `/CW-Webtech.github.io/${diet} pages/Thursday.html`
    document.getElementById("Friday").href = `/CW-Webtech.github.io/${diet} pages/Friday.html`
    document.getElementById("Saturday").href = `/CW-Webtech.github.io/${diet} pages/Saturday.html`
    document.getElementById("Sunday").href = `/CW-Webtech.github.io/${diet} pages/Sunday.html`
    let day = ""
    let dayofweek = new Date().getDay();
    if (dayofweek === 1){
      day = "Monday.html"
      }
    else if(dayofweek === 2){
      day = "Tuesday.html"
    }
    else if(dayofweek === 3){
      day = "Wednesday.html"
    }
    else if(dayofweek === 4){
       day = "Thursday.html"
    }
    else if(dayofweek === 5){
       day = "Friday.html"
    }
    else if(dayofweek === 6){
       day = "Saturday.html"
   }
    else if(dayofweek === 7){
      day = "Sunday.html"
    }
    document.getElementById("Todays-meal").href = `/CW-Webtech.github.io/${diet} pages/${day}`;
}
  
