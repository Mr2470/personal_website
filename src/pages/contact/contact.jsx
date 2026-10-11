import { Link } from 'react-router-dom'
import './contact.css'

function Contact() {
    return (
        <>
            <div className='backgroundcontact'>
                <div className="header">
                    <div className='Mr2470Container'>
                        <h1 className='Mr2470'>Mr2470</h1>
                        <button className='BTN2'>Contact Me</button>
                    </div>

                    <div className='HeaderList'> 
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About me</Link></li>
                        </ul>
                    </div>

                    <ul className='ul2'>
                        <li className="li2"><Link to="/">Home</Link></li>
                        <li className="li2"><Link to="/about">About me</Link></li>
                    </ul>

                    <Link to="/contact" className="contactBTN">
                        Contact Me
                    </Link> 
                </div>

                <div className='contactBody'>
                    <div className='info'>
                        <h1>Contact Me</h1>

                        <a href="mailto:Mr2470iscool@gmail.com" className='email'>
                            Mr2470iscool@gmail.com
                        </a>

                        <a
                            href="https://github.com/Mr2470"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='github'
                        >
                            Mr2470 GitHub
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact