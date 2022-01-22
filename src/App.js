import { Routes, Route } from 'react-router-dom'

import './styles/app.css'
import './styles/fonts.css'
import './styles/colors.css'

import Header from './components/Header'
import Main from './components/pages/Main'
import Archive from './components/pages/Archive'
import PageNotFound from './components/pages/PageNotFound'

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className='mainComponent'>
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/archive' element={<Archive />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;