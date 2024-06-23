import us from "../components/app.js"

const handleData = (e) => {
    e.preventDefault();
    let user = {
        name: us("name"),
        email: us("email"),
        // image: us("image"),
        // contry: us("contry"),
        password: us("password"),
   
    }

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("islogin",true);
    window.location.href="/newsapp1/pages/index.html"

}


// document.getElementById("usar").addEventListener("submit", handleData);
document.getElementById("usarform").addEventListener("submit", handleData)