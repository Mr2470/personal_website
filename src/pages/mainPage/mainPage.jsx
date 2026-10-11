import { Link,useNavigate } from 'react-router-dom'
import './mainPage.css'

function MainPage() {
    const navigate = useNavigate()
    return (
    <>
        <div className="header">

            <div className="Mr2470Container">
                <h1 className="Mr2470">Mr2470</h1>
                <Link to="/contact" className="BTN2">Contact Me</Link>
            </div>



            <div className="HeaderList"> 
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About me</Link></li>
                </ul>
            </div>

            <ul className="ul2">
                <li className="li2"><Link to="/" className='linkoflist'>Home</Link></li>
                <li className="li2"><Link to="/about" className='linkoflist'>About me</Link></li>
            </ul>

            <button
                className="contactBTN"
                onClick={() => navigate('/contact')}
            >
                Contact Me
            </button>

        </div>

        <div className='body'>
            <div className='info'>
                <p className='HelloP'>Hello, I'm </p>
                <p className='Arta'>ARTA</p>
                <p className='ArtaIntro'>
                    I'm Arta, a developer and problem solver passionate about building things and understanding how they work.
                    I work with Python, JavaScript, React, and React Native, constantly expanding my skills through real-world projects.
                    I'm driven by curiosity, ambitious goals, and the desire to turn ideas into useful, well-built software.
                </p>
            </div>

            <img
                src="/file_0000000022ec81f88a4a638e3933687d.png"
                alt=""
                className='ArtaIMG'
            />
        </div>
    </>
    )
}

export default MainPage