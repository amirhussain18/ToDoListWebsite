let input = document.querySelector("input");
let addbtn = document.querySelector("button");
let thelist = document.querySelector("ul");
let doneBtn = document.querySelectorAll(".donebtn");
let delBtn = document.querySelectorAll(".delbtn");

input.addEventListener("input", ()=>{
    addbtn.style.display = "block";
})

function addTask(){
    if (input.value != ""){
        addbtn.style.display = "none";

        let item = document.createElement("li");
        item.innerText = input.value;

        let donebtn = document.createElement("button");
        donebtn.innerText = "Done";
        donebtn.classList.add("donebtn");
        donebtn.classList.add("btn");
        donebtn.classList.add("btn-warning");

        let delbtn = document.createElement("button");
        delbtn.innerText = "Delete";
        delbtn.classList.add("delbtn");
        delbtn.classList.add("btn");
        delbtn.classList.add("btn-danger");
        
        let btnbox = document.createElement("span");
        btnbox.classList.add("btnbox");
        btnbox.append(donebtn);
        btnbox.append(delbtn);

        item.append(btnbox);
        thelist.appendChild(item);
        input.value = "";
    }
}
addbtn.addEventListener("click", addTask);

function actions(event){
    if (event.target.classList[0]=="delbtn"){
        event.target.parentElement.parentElement.remove();
    }
    if (event.target.classList[0]=="donebtn"){
        let tsktxt = event.target.parentElement.parentElement;
        if (tsktxt.style.textDecoration=="line-through 0.2rem"){
            tsktxt.style.textDecoration = "none";
            event.target.innerText = "Done";
        }else{
            tsktxt.style.textDecoration = "line-through 0.2rem";
            event.target.innerText = "UnDo";
        }
    }
}
thelist.addEventListener("click", actions);