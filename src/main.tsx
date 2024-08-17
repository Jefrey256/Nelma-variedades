import { createRoot } from 'react-dom/client'
import Rotas from './componets/Routers/rotas'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <Router>
    <Rotas />
  </Router>,
)
