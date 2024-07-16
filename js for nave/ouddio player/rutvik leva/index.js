
let arr = [
  {   id : 1,
      name: "Maar udi ",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_timesmusic/2024-07/01/11-36/8902633356702.jpg",
      music : "./rutvik leva/music/Bin Sajni Ke Jeevan (New Instagram Viral Hindi Dialoug Special Dhamaka Dance Humming Mix) Dj Debasis Remix-BarmanMusic.Com.mp3"
  },
  {
      id : 2,
      name: "Saare Ki ",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_timesmusic/2024-07/01/11-36/8902633356702.jpg",
      music : "./rutvik leva/music/Ami Pushparaj Tui Srivalli (Purulia New Album Exited Roadshow Dance Humming Mix 2024) Dj Bm Music Center-BarmanMusic.Com.mp3"
  },
  {
      id : 3,
      name: " Tere Vaaste",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8903431638557/1615226436/srch_hungama_24733966.jpg",
      music : "./rutvik leva/music/Are Sare Pachtai (Purulia New Album Exited Roadshow Dance Humming Mix 2024) Dj Bm Music Center-BarmanMusic.Com.mp3"
  },
  {
      id : 4,
      name: "Nashe Si Chadh Gayi ",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_unisysinfo/20230817112119000/0849486075603/1692346623671/resources/0849486075603.jpg",
      music : "./rutvik leva/music/Bagal Wala Jaan Marelu (Purulia New Album Exited Roadshow Dance Humming Mix 2024) Dj Bm Music Center-BarmanMusic.Com.mp3"
  },
  {
      id : 5,
      name: " Teri Baaton Mein Aisa Uljha Jiya",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8902894362214_20240205185326/8902894362214/1707140412515/resources/8902894362214.jpg",
      music : "./rutvik leva/music/Churi Payel (Purulia New Album Exited Roadshow Dance Humming Mix 2024) Dj Bm Music Center-BarmanMusic.Com (1).mp3"
  },
  {
      id : 6,
      name: " ANIMAL (Deluxe Edition Album) ",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431981196_20240124153424/8903431981196/1706091605637/resources/8903431981196.jpg",
      music : "./rutvik leva/music/Churi Payel (Purulia New Album Exited Roadshow Dance Humming Mix 2024) Dj Bm Music Center-BarmanMusic.Com.mp3"
  },
  {
      id : 7,
      name: "Zaalima ",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1492505048/srch_zeemusic_ZMC00357-02.jpg",
      music : "./rutvik leva/music/Dewarba Dhodi Chatanwa (Purulia New Album Exited Roadshow Dance Humming Mix 2024) Dj Bm Music Center-BarmanMusic.Com.mp3"
  },
  {
      id : 8,
      name: "Jhoome Jo Pathaan ",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_unisysinfo/20230816131729000/0194548408807/1692188114616/resources/0194548408807.jpg",
      music : "./rutvik leva/music/Gari Chalao Baby Slow Slow (Purulia New Album Exited Roadshow Dance Humming Mix 2024) Dj Bm Music Center-BarmanMusic.Com.mp3"
  },
  {
      id : 9,
      name: " Dil Diyan Gallan",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1513066081/srch_unisysinfo_M09050405.jpg",
      music : "./rutvik leva/music/Jis Jivan Mein Tu Nehi Sajan (Saraswati Puja Special Hindi Running Power Music Roadshow Humming Dhamaka Mix 2024) Dj Rb Mix Kalagachia-BarmanMusic.Com.mp3"
  },
  {
      id : 10,
      name: "Ghungroo ",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_unisysinfo/20231003101229000/0849486006348/1696508172067/resources/0849486006348.jpg",
      music : "./rutvik leva/music/Yaad Aa Raha Hai (Saraswati Puja Special Hindi Running Power Music Roadshow Humming Dhamaka Mix 2024) Dj Rb Mix Kalagachia-BarmanMusic.Com.mp3"
  }

]

const MUSIC=(data)=>{

  document.getElementById("music").innerHTML=""

  let img = document.createElement("img");
  img.src = arr[data].img;

  let name= document.createElement("h2");
  name.innerHTML = arr[data].name;


  let music = document.createElement("audio");
  music.src = arr[data].music;
  let div = document.createElement("div");

  div.append(music)
  music.controls = true;

  img.addEventListener("click", () => {
      music.play();
  });

  name.addEventListener("click", () => {
      music.play();
  });

  // let main= document.createElement("div");
  // main.setAttribute("class", "player");
  // let prew=document.createElement("div")
  // prew.textContent="<<<";
  // let stop=document.createElement("div")
  // stop.textContent="o"
  // let next=document.createElement("div")
  // next.textContent=">>>";

  // prew.addEventListener("click", () => {
  //     if(i===0){
  //         arr[arr.length-1].music.play();
  //     }else{
  //         arr[i-1].music.play();
  //     }
  // })
  
  // stop.addEventListener("click", () => {
  //     music.pause();
  // })
  
  // next.addEventListener("click", () => {
  //     if(i===arr.length-1){
  //         arr[0].music.play();
  //     } else{
  //         arr[i+1].music.play();
  //     }
  // })

  // main.append(prew, stop, next)
  let handelmusic= document.getElementById("music");
  handelmusic.append(img, name, music);

}
arr.map((arr, i) =>{
  
  let player = document.createElement("h2");
  player.innerHTML = arr.name;
  player.addEventListener("click", () => {
      MUSIC(i)
  });
  document.getElementById("puss").append(player);
})
