import { Link, NavLink } from 'react-router-dom'
import './nav.css'

const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About me' },
    { to: '/projects', label: 'Projects' },
]

function Nav() {
    return (
        <header className="site-nav">
            <div className="site-nav__inner">
                <Link to="/" className="site-nav__brand">
                    Mr2470
                </Link>

                <nav className="site-nav__links" aria-label="Main">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === '/'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'site-nav__link is-active'
                                    : 'site-nav__link'
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <Link to="/contact" className="site-nav__cta">
                    Contact Me
                </Link>
            </div>
        </header>
    )
}

export default Nav
