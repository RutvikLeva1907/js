import navbar from "../componants/navbar.js";
import getValue from "../componants/app.js";
import getValuec from "../componants/app1.js";


// console.log(navbar);

document.getElementById("navbar").innerHTML = navbar()
// document.getElementById("getValue").innerHTML = getValue()


const addData = (e) => {
    e.preventDefault();


    let usar = {
        name: getValue("name"),
        othername: getValue("othername"),

        bookDescription: getValue("bookDescription"),

        addingdate: getValue("addingdate"),

        category: getValue("category"),

        bookprice: getValue("bookprice"),

       

    }
    // tr: getValuec("tr"),
    // td1: getValuec("td"),
    // td1.innerHTML = name,
    // td2:getValuec("tr"),
    // td2.innerHTML = othername,

    // console.log(usar);
    localStorage.setItem("usar",JSON.stringify(usar));
    localStorage.setItem("islogin",true);
}

document.getElementById("Library").addEventListener("submit", addData);
