const button=document.getElementById("btn");


button.onclick=()=>{
     location.href="./game.html";
     const user1=document.getElementById("user1")
    const user2=document.getElementById("user2")

    localStorage.setItem("user1",user1.value)
    localStorage.setItem("user2",user2.value)
   
}
