import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/mainPage/mainPage'
import AboutPage from './pages/aboutPage/about'
import Contact from "./pages/contact/contact"
function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    )
}

export default App