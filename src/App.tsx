import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Admin } from './pages/Admin'
import { Home } from './pages/Home'
import { Lender } from './pages/Lender'
import { Borrower } from './pages/Borrower'
import { Fundraising } from './pages/Fundraising'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
      path: '/fundraising',
      element: <Fundraising />,
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
      <ToastContainer />
    </div>
  )
}

export default App
