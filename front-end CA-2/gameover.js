const reset=document.getElementById("reset-btn")
reset.onclick=()=>{
    location.href="./game.html";
}

var username=document.getElementById("player");
username.innerText+=localStorage.getItem("user1");
console.log(localStorage.getItem("user1"))
console.log(user1.value)

// var username=document.getElementById("player");
// username.innerText+=localStorage.getItem("user2");
// console.log(localStorage.getItem("user2"))