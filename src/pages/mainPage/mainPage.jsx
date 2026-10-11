import Nav from '../../components/nav'
import './mainPage.css'

function MainPage() {
    return (
        <>
            <Nav />

            <main className="page">
                <div className="hero">
                    <div className="hero__text">
                        <p className="hero__hello">Hello, I&apos;m</p>
                        <h1 className="hero__name">ARTA</h1>
                        <p className="hero__intro">
                            I&apos;m Arta, a developer and problem solver
                            passionate about building things and understanding
                            how they work. I work with Python, JavaScript,
                            React, and React Native, constantly expanding my
                            skills through real-world projects. I&apos;m driven
                            by curiosity, ambitious goals, and the desire to
                            turn ideas into useful, well-built software.
                        </p>
                    </div>

                    <div className="hero__media">
                        <img
                            src="/file_0000000022ec81f88a4a638e3933687d.png"
                            alt="Portrait of Arta"
                            className="hero__img"
                            decoding="async"
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainPage
