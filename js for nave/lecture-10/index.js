let min= prompt(`Enter the minite`);
let sec= prompt(`enter the second`);

const timer = () => {

    if (sec > 0) {
        sec--;
    }

    if (sec == 0 && min > 0) {
        sec = 59;
        min--;
    }
    if(min == 0 && sec == 0){
        clearInterval(id);
    }



    document.getElementById(`min`).innerHTML = min;
    document.getElementById(`sec`).innerHTML = sec;
}

let  id = setInterval(() => {
    timer()

},1000)





const counter = (count, idx, t) => {
    let text = 0
    let id = setInterval(() => {

        text = text + 1
        document.getElementById(idx).innerHTML = text

        if (text == count) {
            clearInterval(id)
        }
    }, t)
}
let count1 = document.getElementById("count1").innerHTML
let count2 = document.getElementById("count2").innerHTML
let count3 = document.getElementById("count3").innerHTML
let count4 = document.getElementById("count4").innerHTML

// console.log(count1 ,count2);
counter(count1, "count1", 70)
counter(count2, "count2", 100)
counter(count3, "count3", 50)
counter(count4, "count4", 40)




