/* eslint-disable no-new */
import FavoriteRestaurantListView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-list-view'
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-show-presenter'
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-db'

describe('Showing all favorite restaurants', () => {
  let view

  const renderTemplate = () => {
    view = new FavoriteRestaurantListView()
    document.body.innerHTML = view.getTemplate()
  }

  beforeEach(() => {
    renderTemplate()
  })

  describe('When no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb)

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants
      })

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1)
    })

    it('should show the information that no restaurants have been liked', (done) => {
      document.querySelector('.posts').addEventListener('restaurants:updated', () => {
        console.log(document.querySelectorAll('.posts__header').innerHTML)
        expect(document.querySelectorAll('.posts__header').innerHTML)
          .toEqual('There is no favorite restaurant')

        done()
      })

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb)
      favoriteRestaurants.getAllRestaurants.and.returnValues([])

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants
      })
    })
  })

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item').length).toEqual(2)
        done()
      })

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb)
      favoriteRestaurants.getAllRestaurants.and.returnValues([
        {
          id: 11, title: 'A', vote_average: 3, overview: 'Sebuah film A'
        },
        {
          id: 22, title: 'B', vote_average: 4, overview: 'Sebuah film B'
        }
      ])

      FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants
      })
    })
  })
})
