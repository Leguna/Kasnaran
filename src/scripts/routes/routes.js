import List from '../views/pages/list'
import Search from '../views/pages/search'
import Detail from '../views/pages/detail'
import Favorites from '../views/pages/favorites'

const routes = {
  '/': List,
  '/search': Search,
  '/detail/:id': Detail,
  '/favorites': Favorites
}

export default routes
