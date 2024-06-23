// let min= prompt(`Enter the minite`);
// let sec= prompt(`enter the second`);

// const timer = () => {

//     if (sec > 0) {
//         sec--;
//     }

//     if (sec == 0 && min > 0) {
//         sec = 59;
//         min--;
//     }
//     if(min == 0 && sec == 0){
//         clearInterval(id);
//     }



    // document.getElementById(`min`).innerHTML = min;
//     document.getElementById(`sec`).innerHTML = sec;
// }

// let  id = setInterval(() => {
//     timer()

// },1000)



// let id = setInterval(()=>{
//     timer()
// },1000)


// let min = prompt('enter minute  ');
// let sec = prompt('enter second ');

// const timer = () =>{

//    if(sec > 0){
//     sec--;
//    }

//     if(sec == 0 && min > 0){
//         sec = 59;
//         min--;
//     }
//     if(min == 0 && sec == 0){
//         clearInterval(id);
//     }

//     document.getElementById('min').innerHTML =  min;
//     document.getElementById('sec').innerHTML = sec;
// }


// let id = setInterval(()=>{
//     timer()
// },1000)







// <-- start time -->

//  (() => {


//     const counter = document.querySelector(`.counter`);

//     const array = Array.from(counter);
//     array.map((item) => {
//         let text = item.textcontent;
//         let count = 1;
//         let speed = item.dataset.speed / text
//         function counterup() {

//             item.textcounter = count++
//             if (text < count) {
//                 clearInterval(id);
//             }
//         }
//         const id = setInterval(() => {
//             counterup()

//         }, speed);

//     })

// })()





// (() => {
//     const counter = document.querySelectorAll('.counter');
//     const array = Array.from(counter);
//     // select array element
//     array.map((item) => {
//         // data layer
//         let counterInnerText = item.textContent;

//         let count = 1;
//         let speed = item.dataset.speed / counterInnerText
//         function counterUp() {
//             item.textContent = count++
//             if (counterInnerText < count) {
//                 clearInterval(stop);
//             }
//         }
//         const stop = setInterval(() => {
//             counterUp();
//         }, speed);
//     })
// })()


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

console.log(count1 ,count2);
counter(count1, "count1", 500)
counter(count2, "count2", 400)




// const counte = (count, rd ,time) => {


//     let counter = 0;
//     let id = setInterval(() => {
//         counter = counter + 1
//         document.getElementById(rd).innerHTML=counter
//         if (counter == count) {
//             clearInterval(id)
//         }


//     },time)
// }
// let const1 = document.getElementById("count1").innerHTML



// counte(const1 ,"count1",500)