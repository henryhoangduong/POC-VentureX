import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Admin } from './pages/Admin'
import { Home } from './pages/Home'
import { Lender } from './pages/Lender'
import { Borrower } from './pages/Borrower'
import { Pool } from './pages/Pool'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  const router = [
    {
      path: '/admin',
      element: <Admin />,
    },
    {
      path: '/lender',
      element: <Lender />,
    },
    {
      path: '/borrower',
      element: <Borrower />,
    },
    {
      path: '/pool',
      element: <Pool />,
    },
  ]

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              {router.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Layout>
        </Router>
      </Provider>
    </div>
  )
}

export default App
