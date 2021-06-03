import CONFIG from '../../globals/config'

const createRestaurantCardTemplate = (res) => `
<article class='post-item' id='${res.id}' tabindex='0'>
<img tabindex='0' class='post-item__thumbnail' src='${CONFIG.BASE_IMAGE_URL + res.pictureId}'
    alt='Gambar ${res.name}'>
<div class='post-item__content'>
    <p tabindex='0' class='post-item__date'>
      Rating: ${res.rating}
    </p>
    <h1 class='post-item__title'><p tabindex='0' href='#'>${res.name}</p></h1>
    <h1 class='post-item__subtitle'><p tabindex='0' href='#'>${res.city}</p></h1>
    <p tabindex='0' class='post-item__description'>${res.description.slice(0, 500) + (res.description.length > 500 ? '...' : '')}</p>
</div>
</article>`

export {
  createRestaurantCardTemplate
}
