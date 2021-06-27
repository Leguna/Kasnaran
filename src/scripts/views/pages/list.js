import RestaurantDbSource from '../../data/restaurant-source'
import { createRestaurantCardTemplate } from '../templates/template-creator'
import anime from 'animejs/lib/anime.es.js'

const ListRestaurant = {
  async render () {
    return `
        <div class="hero" title="Hero Food">
            <div class="hero__inner">
                <h1 class="ml14">
                    <span class="text-wrapper">
                        <span tabindex="0" class="letters">“You don’t need a silver fork to eat good food.”</span>
                        <span class="line"></span>
                    </span>
                </h1>
                <h1 tabindex="0" class="ml3">- Paul Prudhomme</h1>
            </div>
        </div>

        <div id="content" class="content" tabindex="0">
            <h1 tabindex="0" class="posts__header">Our Resaturant</h1>
            <div class="posts">
            </div>
        </div>
    `
  },

  async afterRender () {
    const restaurants = await RestaurantDbSource.listRestaurant()

    const restaurantsContainer = document.querySelector('.posts')

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantCardTemplate(restaurant)
    })

    const postItems = document.querySelectorAll('.post-item')

    for (let i = 0; i < postItems.length; i++) {
      const postItem = postItems[i]

      postItem.addEventListener('mouseenter', () => {
        anime({
          targets: postItem,
          scale: 1.05
        })
      })

      postItem.addEventListener('mouseleave', () => {
        anime({
          targets: postItem,
          scale: 1
        })
      })

      // postItem.addEventListener('click', () => {
      //   location.href = `#/detail/${postItem.getAttribute('id')}`
      // })
    }

    // Hero
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

    const hero = document.querySelector('.hero')

    hero.addEventListener('click', () => {
      TLControl.restart()
    })
  }
}

export default ListRestaurant
