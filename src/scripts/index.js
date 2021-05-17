import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import anime from 'animejs/lib/anime.es.js';
import data from '../DATA.json'
var $ = require( "jquery" );

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');
const post = document.querySelector('.posts');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});



var restaurants= data.restaurants;

restaurants.forEach(res => {
    post.innerHTML+= addPost(res);
});

function addPost(res) {
    var card = "";
    card +=  `
    <article class='post-item'>
    <img class='post-item__thumbnail' src='`+res.pictureId+`'
        alt='Gambar `+res.name+`'>
    <div class='post-item__content'>
        <p tabindex='0' class='post-item__date'>
            <span class="fa fa-star`+((Math.round(res.rating)>0)?` checked`:``)+`"></span>
            <span class="fa fa-star`+((Math.round(res.rating)>1)?` checked`:``)+`"></span>
            <span class="fa fa-star`+((Math.round(res.rating)>2)?` checked`:``)+`"></span>
            <span class="fa fa-star`+((Math.round(res.rating)>3)?` checked`:``)+`"></span>
            <span class="fa fa-star`+((Math.round(res.rating)>4)?` checked`:``)+`"></span>
        </p>
        <h1 class='post-item__title'><a href='#'>`+res.name+`</a></h1>
        <h1 class='post-item__subtitle'><a href='#'>`+res.city+`</a></h1>
        <p tabindex='0' class='post-item__description'>`+res.description.slice(0, 500)+(res.description.length>500?'...':'')+`</p>
    </div>
</article>`;
    return card;
}

$('.post-item').mouseenter(function () { 
anime({
    targets: this,
    scale: 1.05
  });
});

$('.post-item').mouseleave(function () { 
    anime({
        targets: this,
        scale: 1
      });
});


// Hero

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var textWrapper2 = document.querySelector('.ml3');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var TLControl = anime.timeline({loop: false});
TLControl.add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 600,
    delay: (el, i) => 50 * (i+1)
  });

  
$('.hero').mousedown(function () { 
    console.log('Restart');
    TLControl.restart();
});