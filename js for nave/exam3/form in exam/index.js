const empaloyData = (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let select = document.getElementById("select").value;
    let Department = document.getElementById("Department").value;
    let Salary = document.getElementById("Salary").value;
    let Email = document.getElementById("Email").value;
    let Experience = document.getElementById("Work-Experience").value;


    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = name;
    let td2 = document.createElement("td");
    td2.innerHTML = select;
    let td3 = document.createElement("td");
    td3.innerHTML = Department;
    let td4 = document.createElement("td");
    td4.innerHTML = Salary;
    let td5 = document.createElement("td")
    td5.innerHTML = Email;
    let td6 = document.createElement("td");
    td6.innerHTML = Experience;
    let td7 = document.createElement("td");
    if (Experience > 5) {
        td7.innerHTML = "sinior"
        // td5.style.backgroundColor = "green"
    } else {
        td7.innerHTML = "junior"
        // td5.style.backgroundColor = "red"
    }

    let td8 = document.createElement("td");
    td8.innerHTML = "delete";
    td8.style.backgroundColor = "red";
    td8.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    })


    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

    document.getElementById("data").append(tr);

}
document.getElementById("empaloy").addEventListener("submit", empaloyData);