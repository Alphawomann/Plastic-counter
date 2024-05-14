

let CountEl = document.getElementById("count-el")

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let SaveEl = document.getElementById("save-el")

let count = 0

function increment() {
  count += 1
  CountEl.textContent = count  
}


function save(){
  console.log(count)
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let entries = count + " - "
    // 3. Render the variable in the saveEl using textContent
    SaveEl.textContent += entries 
    //To set the count to 0, the next counting starts from 0
    CountEl.textContent = 0
    count = 0 


} 





