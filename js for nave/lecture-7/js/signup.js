// import navbar from "../componant/navbar.js";

// document.getElementById("navbar").innerHTML=navbar()

// const handelusar=(e)=>{
//     e.preventDefault();

// let usarname={
//     name:document.getElementById("name").value,
//     email:document.getElementById("email").value,
//     password:document.getElementById("password").value,
//     data:[]

// }
// localStorage.setItem("usar" ,JSON.stringify(usarname))
// // console.log(JSON.stringify(usarname));
// localStorage.setItem("islogin", true)
// document.getElementById("navbar").innerHTML=navbar("logout" ,usarname.name)
// }


// document.getElementById("usar").addEventListener("submit",handelusar);




document.getElementById("singup").addEventListener("submit",(e)=>{
    e.preventDefault()
    let deatil={
     username:document.getElementById("name").value,
     email:document.getElementById("email").value,
     img:document.getElementById("url").value,
     country:document.getElementById("country").value,
     password:document.getElementById("pw").value,
   
    } 
localStorage.setItem("singup",JSON.stringify(deatil))
window.location.href="/pages/login.html"
    })