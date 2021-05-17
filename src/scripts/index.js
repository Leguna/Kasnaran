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
        alt='`+res.name+`'>
    <div class='post-item__content'>
        <p class='post-item__date'>
            <span class="fa fa-star`+((Math.round(res.rating)>0)?` checked`:``)+`"></span>
            <span class="fa fa-star`+((Math.round(res.rating)>1)?` checked`:``)+`"></span>
            <span class="fa fa-star`+((Math.round(res.rating)>2)?` checked`:``)+`"></span>
            <span class="fa fa-star`+((Math.round(res.rating)>3)?` checked`:``)+`"></span>
            <span class="fa fa-star`+((Math.round(res.rating)>4)?` checked`:``)+`"></span>
        </p>
        <h1 class='post-item__title'><a href='#'>Kenapa Harus Belajar Coding Dari Sekarang?</a></h1>
        <p class='post-item__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur atque autem culpa laborum odio similique voluptas. A ab animi ducimus earum
            explicabo hic molestias repudiandae sunt. Consectetur consequuntur dolorum excepturi, fugit,
            minus nemo non quae quaerat quod recusandae reprehenderit totam, unde. Aliquid autem
            doloremque impedit quod tempora tenetur totam vero.</p>
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