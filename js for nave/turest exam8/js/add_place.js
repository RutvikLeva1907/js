
import { navbar } from "../componants/helper.js";
document.getElementById("navbar").innerHTML=navbar()


let usar= JSON.parse(localStorage.getItem("usar"));
let IsLogin=localStorage.getItem("IsLogin")||false;

if (IsLogin) {
    document.getElementById("navbar").innerHTML = navbar("Log Out", user.name);
} else {
    window.location.href = "/login.html";
}

document.getElementById("login").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("IsLogin");
    window.location.href = "/login.html";
})

// puss locole storage

let puss =