import RestaurantDbSource from '../../data/favorite-restaurant-db'
import { createRestaurantCardTemplate } from '../templates/template-creator'
import anime from 'animejs/lib/anime.es.js'

const ListRestaurant = {
  async render () {
    return `
           <div class="content">
            <h1 tabindex="0" class="posts__header">Liked Resaturant</h1>
            <div class="posts">
            </div>
        </div>
    `
  },

  async afterRender () {
    const restaurants = await RestaurantDbSource.getAllRestaurant()

    const restaurantsContainer = document.querySelector('.posts')

    if (restaurants.length === 0) {
      document.querySelector('.posts__header').innerHTML = 'There is no favorite restaurant'
    }
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

      postItem.addEventListener('click', () => {
        location.href = `#/detail/${postItem.getAttribute('id')}`
      })
    }
  }
}

export default ListRestaurant
