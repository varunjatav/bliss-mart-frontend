import { createRoot } from 'react-dom/client'
import './output.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import blissMartStore from './store/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={blissMartStore}>
    <App />
  </Provider>,
)
