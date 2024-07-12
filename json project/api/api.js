
export const data={
    post:async (value)=>{
    let req=await fetch(`http://localhost:3000/user`,{
 method:'POST',
 headers:{
    'content-type':'application/json'
 },
body:JSON.stringify(value)
    })
},
get:async()=>{
    let req= await fetch(`http://localhost:3000/user`)
    let res= await req.json()
    return res
},
getemail:async(email)=>{
    let req= await fetch(`http://localhost:3000/user?email=${email}`)
    let res= await req.json()
    return res
},
patch:async (id,value)=>{
    let req=await fetch(`http://localhost:3000/user/${id}`,{
 method:'PATCH',
 headers:{
    'content-type':'application/json'
 },
body:JSON.stringify(value)
    });
},
delete:async(id)=>{
let req=await fetch(`http://localhost:3000/user/${id}`,{
    method:'DELETE'
})
}
}