const list = document.querySelector(".list")
const form = document.querySelector(".newTask")
const input =document.querySelector("#task")



form.addEventListener("submit", function(e){
    e.preventDefault()
    const newChore = document.createElement("li")
    const newBtn= document.createElement("button")
    newBtn.innerText = "Done"
    newChore.innerText =  input.value
    newChore.appendChild(newBtn)
    input.value = ""
    list.appendChild(newChore)
    

})
  
list.addEventListener("click",function(e){
    if (e.target.tagName  === "BUTTON") {
        e.target.parentElement.remove()
    }
})






