
const mapper = (data) => {
    let div = document.createElement("div")
    div.innerHTML = data.main.temp
    let tamp = document.createElement("div")
    tamp.innerHTML = data.name 

    // let h1 = document.createElement("div")
    // h1.innerHTML = data.main.humidity
    document.getElementById("location").append(div,tamp)
}
const api = async (sityname) => {


    let rau = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sityname}&appid=6f826a407470a962c4162dd900399596&units=metric`)
    let res = await rau.json()

    console.log(res);
    mapper(res)
}
api("surat")
