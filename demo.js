let nme=document.getElementById("name");
let email=document.getElementById("name");
let sub=document.getElementById("submit");
let arr=JSON.parse(localStorage.getItem("data"))||[];
sub.addEventListener("click",(e)=>{
   // e.preventDefault();
    let obj={
        name:nme.value,
        email:email.value
    };
    
    arr.push(obj);
    localStorage.setItem("data",JSON.stringify(arr));
})

//localStorage.setItem("data","ram");