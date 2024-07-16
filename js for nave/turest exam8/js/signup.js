import { navbar } from "../componants/helper.js";

document.getElementById("navbar").innerHTML=navbar()




const HandleData=(e)=>{
    e.preventDefault();

    let user={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
    }

    console.log(user);

    localStorage.setItem("user",JSON.stringify(user));
    localStorage.setItem("IsLogin",true);
    alert("New User Registered Successfully...");
    window.location.href="/index.html";
}
document.getElementById("sign_up").addEventListener("submit",HandleData);