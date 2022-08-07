let submit = document.getElementById("subButton");
let buttons = document.querySelectorAll(".rate button");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let textChange = document.getElementById("textNumber");
let selected = "";

buttons.forEach(btn => {
    btn.addEventListener("click", (t) =>{
        selected = t.target.textContent;
        t.target.classList.add("selected");
    })
})

submit.addEventListener("click", (t) => {
    if(selected == "") {
        setTimeout( () => {
        }, 1000);
        return
    }
    textChange.textContent = `You selected ${selected}`
    box1.style.display = "none";
    box2.style.display = "unset";
})
