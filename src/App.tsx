import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Admin } from './pages/Admin'
import { Home } from './pages/Home'
import { Lender1 } from './pages/Lender/Lender1'
import { Borrower } from './pages/Borrower'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Lender2 } from './pages/Lender/Lender2'
import { Fundraising } from './pages/Fundraising'
import { SystemPool } from './pages/SystemPool'

function App() {
  const router = [
    {
      path: '/admin',
      element: <Admin />,
    },
    {
      path: '/lender1',
      element: <Lender1 />,
    },
    {
      path: '/lender2',
      element: <Lender2 />,
    },
    {
      path: '/borrower',
      element: <Borrower />,
    },
    {
      path: '/systempool',
      element: <SystemPool />,
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
