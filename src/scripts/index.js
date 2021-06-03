import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'

import anime from 'animejs/lib/anime.es.js'
import data from '../DATA.json'

const menu = document.querySelector('#menu')
const hero = document.querySelector('.hero')
const main = document.querySelector('main')
const drawer = document.querySelector('#drawer')
const post = document.querySelector('.posts')

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open')
  event.stopPropagation()
})

hero.addEventListener('click', function () {
  drawer.classList.remove('open')
})

main.addEventListener('click', function () {
  drawer.classList.remove('open')
})

const restaurants = data.restaurants

restaurants.forEach(res => {
  post.innerHTML += addPost(res)
})

function addPost (res) {
  let card = ''
  card += `
    <article class='post-item' id='` + res.id + `' tabindex='0'>
    <img tabindex='0' class='post-item__thumbnail' src='` + res.pictureId + `'
        alt='Gambar ` + res.name + `'>
    <div class='post-item__content'>
        <p tabindex='0' class='post-item__date'>
            <span class="fa fa-star` + ((Math.round(res.rating) > 0) ? ' checked' : '') + `"></span>
            <span class="fa fa-star` + ((Math.round(res.rating) > 1) ? ' checked' : '') + `"></span>
            <span class="fa fa-star` + ((Math.round(res.rating) > 2) ? ' checked' : '') + `"></span>
            <span class="fa fa-star` + ((Math.round(res.rating) > 3) ? ' checked' : '') + `"></span>
            <span class="fa fa-star` + ((Math.round(res.rating) > 4) ? ' checked' : '') + `"></span>
        </p>
        <h1 class='post-item__title'><p tabindex='0' href='#'>` + res.name + `</p></h1>
        <h1 class='post-item__subtitle'><p tabindex='0' href='#'>` + res.city + `</p></h1>
        <p tabindex='0' class='post-item__description'>` + res.description.slice(0, 500) + (res.description.length > 500 ? '...' : '') + `</p>
    </div>
</article>`
  return card
}

const postItem = document.querySelector('.post-item')

postItem.addEventListener('mouseenter', () => {
  anime({
    targets: this,
    scale: 1.05
  })
})

postItem.addEventListener('mouseleave', () => {
  anime({
    targets: this,
    scale: 1
  })
})

postItem.addEventListener('click', () => {
  // Detail Restaurant
  location.href = '#' + this.attr('id')
})

// Hero

// Wrap every letter in a span
const textWrapper = document.querySelector('.ml14 .letters')
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

const textWrapper2 = document.querySelector('.ml3')
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

const TLControl = anime.timeline({ loop: false })
TLControl.add({
  targets: '.ml14 .line',
  scaleX: [0, 1],
  opacity: [0.5, 1],
  easing: 'easeInOutExpo',
  duration: 900
}).add({
  targets: '.ml14 .letter',
  opacity: [0, 1],
  translateX: [40, 0],
  translateZ: 0,
  scaleX: [0.3, 1],
  easing: 'easeOutExpo',
  duration: 800,
  offset: '-=600',
  delay: (el, i) => 150 + 25 * i
}).add({
  targets: '.ml3 .letter',
  opacity: [0, 1],
  easing: 'easeInOutQuad',
  duration: 600,
  delay: (el, i) => 50 * (i + 1)
})

hero.addEventListener('click', () => {
  TLControl.restart()
})
