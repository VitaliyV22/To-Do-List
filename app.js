const list = document.querySelector(".list")
const button = document.querySelectorAll("li button")
const chore = document.querySelectorAll(".chore")
const form = document.querySelector(".newTask")
const input =document.querySelector("#task")

for(let btn of button){
    btn.addEventListener("click", function(e){
        e.target.parentElement.remove()
        
    })
}

form.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(input.value)
    const newChore = document.createElement("li")
    newChore.innerText = input.value
    input.value = ""
    list.appendChild(newChore)

})




