import { createRoot } from 'react-dom/client'
import './output.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import blissMartStore from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AllProducts from './components/AllProducts.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
     {
      index: true,
      element: <Home/>
     },
     {
      path:'/product-list',
      element: <AllProducts/>
     }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={blissMartStore}>
    <RouterProvider router={router}/>
  </Provider>,
)
