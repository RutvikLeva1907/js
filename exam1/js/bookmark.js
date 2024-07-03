import getValuec from "../componants/app1.js";
import navbar from "../componants/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

let usarData = JSON.parse(localStorage.getItem("usar")) [0];
const mapper = (data) => {
    document.getElementById("list").innerHTML = "";

    data.map((item,index) => {

        let td1 = document.createElement("td");
        td1.innerHTML = item.name;

        let td2 = document.createElement("td");
        td2.innerHTML = item.Author;

        let td3 = document.createElement("td");
        td3.innerHTML = item.description;

        let td4 = document.createElement("td");
        td4.innerHTML = item.addedDate;

        let td5 = document.createElement("td");
        td5.innerHTML = item.category;

        let td6 = document.createElement("td");
        td6.innerHTML = item.price;

        let btn1 = document.createElement("button");
        btn1.innerHTML = "Buy";
        btn1.setAttribute("id", "btn");
        let td7 = document.createElement("td");
        td7.append(btn1);
        btn1.addEventListener("click", () => {
            mybook.push(item);
            localStorage.setItem("mybook", JSON.stringify(mybook));
            delete_row(index);
            
        });

        let btn2 = document.createElement("button");
        btn2.innerHTML = "Add";
        btn2.setAttribute("id", "btn");
        let td8 = document.createElement("td");
        td8.append(btn2);
        btn2.addEventListener("click", () => {
            bookmark.push(item);
            localStorage.setItem("dashbord", JSON.stringify(dashbord));
            delete_row(index);
        });

        let tr1 = document.createElement("tr");
        tr1.append(td1, td2, td3, td4, td5, td6, td7, td8);

        document.getElementById("tbody").append(tr1);
    })
}

mapper(dashbord);











document.getElementById("tbody").addEventListener("submit");











// const uimakar = (e) => {
//     e.preventDefault();

    
// }