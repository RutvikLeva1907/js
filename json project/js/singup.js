import { data } from "../api/api.js"
import navbar from "../componants/navbar.js"

document.getElementById("navbar").innerHTML=navbar()


document.getElementById("form_data").addEventListener("submit", async(e)=>{
e.preventDefault()
    let userdata={
        name:document.getElementById("name").value, 
        email:document.getElementById("email").value ,
        password:document.getElementById("password").value 
    }
      
    let email=await data.getemail(userdata.email)

if(email==0){
    alert("signup done")
data.post(userdata)
}
else{
    alert("user all ready exist")
}
})