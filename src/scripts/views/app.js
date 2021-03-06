import DrawerInitiator from '../utils/drawer-initiator'
import routes from '../routes/routes'
import UrlParser from '../routes/url-parser'

import '../../styles/main.scss'
import '../../styles/responsive.scss'
import '../../styles/detail.scss'
// import '../../../node_modules/@fortawesome/fontawesome-free/js/all'
// import '../../../node_modules/font-awesome/css/font-awesome.min.css'

class App {
  constructor ({ button, drawer, content, skipToContent }) {
    this._button = button
    this._drawer = drawer
    this._content = content
    this._skipToContent = skipToContent

    this._initialAppShell()
  }

  _initialAppShell () {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]

    this._content.innerHTML = await page.render()
    await page.afterRender()

    const article = document.querySelector('#content') || this._content

    const content = document.getElementById('content')

    this._skipToContent.addEventListener('click', () => {
      console.log(article)
      article.scrollIntoView({
        behavior: 'smooth'
      })
      content.focus()
    })
  }
}

export default App
