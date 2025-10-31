
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Calculator from './pages/Calculator'
import PageNoteFound1 from './pages/PageNoteFound1'

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='calculator' element={<Calculator/>}/>
       <Route path='pagenotfound' element={<PageNoteFound1/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
