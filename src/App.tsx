import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ModalProvider, BaseModalBackground } from 'styled-react-modal'
import styled from 'styled-components'
import { router } from './routes'

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`

function App() {
  return (
    <div className="App">
      <ModalProvider backgroundComponent={FadingBackground}>
        <Provider store={store}>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                {router.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </Layout>
          </Router>
        </Provider>
        <ToastContainer />
      </ModalProvider>
    </div>
  )
}

export default App
