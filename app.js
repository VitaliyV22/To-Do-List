const list = document.querySelector(".list")
const button = document.querySelectorAll("li button")
const chore = document.querySelectorAll(".chore")

for(let btn of button){
    btn.addEventListener("click", function(e){
        e.target.parentElement.remove()
        
    })
}


