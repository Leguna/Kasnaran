/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert')

Feature('Kasnaran Web E2E Testing')

Before(({ I }) => {
  I.amOnPage('/#/favorites')
})

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.posts__header')
  I.see('There is no favorite restaurant', '.posts__header')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.see('There is no favorite restaurant', '.posts__header')

  I.amOnPage('/')

  I.seeElement('.post-item__title')

  const firstRestaurant = locate('.post-item__title').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)

  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorites')

  I.seeElement('.post-item__title')
  const likedRestaurantTitle = await I.grabTextFrom('.post-item__title')

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)
})

Scenario('reviewing restaurant', async ({ I }) => {
  I.amOnPage('/')

  I.seeElement('.post-item__title')

  const firstRestaurant = locate('.post-item__title').first()

  I.click(firstRestaurant)

  I.seeElement('#review-input')

  const firstReview = locate('.reviewText').first()
  const firstReviewText = await I.grabTextFrom(firstReview)

  const time = new Date().getTime()
  I.fillField('#review-input', 'Kasnaran')
  I.fillField('#review-textarea', `Testing review, ${time}`)

  I.seeElement('.reviewButtonSubmit')
  I.click('.reviewButtonSubmit')
  I.refreshPage()
  I.seeElement('.reviewButtonSubmit')

  const currentReview = locate('.reviewText').first()
  const currentReviewText = await I.grabTextFrom(currentReview)
  const isSame = currentReviewText.includes(time)

  assert.notStrictEqual(currentReviewText, firstReviewText)
  assert.strictEqual(isSame, true)
})
