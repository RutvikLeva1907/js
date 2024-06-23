let count = localStorage.getItem('count');

document.querySelector('.main').innerText = count;

const counter = (e) => {
    console.log(e);
    count++;
    localStorage.setItem(`${e}`, count);
    document.querySelector(`.main${e}`).innerText = count;
}

let alli = Object.entries(document.querySelectorAll('i')); // convert json to array
console.log(alli[0][0]);

    let like = document.querySelector('.fa-thumbs-up');
    like.addEventListener('click',()=> counter(alli[0][0]));

    let dislike = document.querySelector('.fa-thumbs-down');
    dislike.addEventListener('click',()=> counter(alli[1][0]));

    let comment = document.querySelector('.fa-comments');
    comment.addEventListener('click',()=> counter(alli[2][0]));

    let share = document.querySelector('.fa-share');
    share.addEventListener('click',()=> counter(alli[3][0]));

    let subscribe = document.querySelector('.fa-bell');
    subscribe.addEventListener('click',()=> counter(alli[4][0]));

document.querySelector(`.main${index}`).innerText = count;