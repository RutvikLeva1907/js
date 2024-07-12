import { data } from "../api/api.js"


document.getElementById("form_data").addEventListener("submit", async(e)=>{
e.preventDefault()
    let userdata={
        email:document.getElementById("email").value ,
        password:document.getElementById("password").value 
    }
      
    let email=await data.getemail(userdata.email)

if(email==0){
    alert("user not found")
}
else if (email[0].password!=userdata.password)
    {
alert("password not match")
}
else(
    alert("login scssefull")
)
})