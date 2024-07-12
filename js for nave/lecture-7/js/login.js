// import navbar from "../componant/navbar.js";

// document.getElementById("navbar").innerHTML = navbar()

// let usarname = JSON.parse(localStorage.getItem("usar"))

// // console.log(deta);


// document.getElementById("usarData").addEventListener("submit", (e) => {
//     e.preventDefault();

//     let usar = {
//         email: document.getElementById("email").value,
//         password: document.getElementById("password").value,
//     }
//     // console.log(usar, usarname);
//     // console.log("working");
//     if (usarname) {
//         if (usarname.password != usar.password) {

//             alert("wrong password")
//         }
//         else if (usarname.email != usar.email) {
//             alert("wrong email")

//         }
//         else {
//             alert("secsefual your login")
//             localStorage.getItem("islogin", true)
//             window.Location.href = "/pages/index.html"
//         }
//     }
//     else {
//         alert("please signup now")
//     }

// })


let deatil = JSON.parse(localStorage.getItem('singup')) || []


console.log(username, password);

document.getElementById("login").addEventListener("submit", (e) => {
    e.preventDefault()
    let data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,

    }

console.log(deatil);
console.log(data);

    if (data.username == deatil.username && data.password == deatil.password) {
        alert("login sucessfully")
        window.location.href="/pages/index.html"
    }
    else {
        alert("login failed")
       
    }



})




