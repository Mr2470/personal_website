import "./about.css"
import { Link,useNavigate } from 'react-router-dom'


function AboutPage(){
    const navigate = useNavigate()
    return(
        <>
        <div className="background">
            <div className="header">
                <div className='Mr2470Container'>
                    <h1 className='Mr2470'>Mr2470</h1>
                    <Link to="/contact" className="BTN2">
                        Contact Me
                    </Link>
                </div>

                <div className='HeaderList'> 
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {/* <li><Link to="/works">Works</Link></li> */}
                        {/* <li><Link to="/services">Services</Link></li> */}
                        <li><Link to="/about">About me</Link></li>
                    </ul>
                </div>

                <ul className='ul2'>
                    <li className="li2"><Link to="/">Home</Link></li>
                    {/* <li className="li2"><Link to="/works">Works</Link></li> */}
                    {/* <li className="li2"><Link to="/services">Services</Link></li> */}
                    <li className="li2"><Link to="/about">About me</Link></li>
                </ul>

                <button className='contactBTN' onClick={() => navigate('/contact')}>Contact Me</button>
            </div>

            <div className="aboutBody">
                {/* <img src="public/misty-forest-mountains-with-lush-green-trees-dd-2560x1440.jpeg" alt="" /> */}

                <p className="aboutmep">
                    I'm <strong>Arta</strong>, a developer, problem solver, and someone who has always been curious about how things work.
                    I've been programming for years, and over time, it has become much more than just a skill for me.
                    I love taking an idea, breaking it down, solving the difficult parts, and turning it into something real.

                    <br /><br />

                    A big part of who I am comes from the people closest to me, especially my parents,
                    <strong> Zahra and Farshad</strong>. Their support has given me the confidence to pursue what I'm passionate about,
                    challenge myself, and keep moving forward. <strong>They are a big part of the person I am today.</strong>

                    <br /><br />

                    My curiosity is one of the biggest reasons I love programming. When I find something I don't understand,
                    I want to know <strong>how it works, why it works, and whether I can build it myself.</strong>
                    I learn best by creating real projects and experimenting with new ideas.
                    I work with <strong>Python, JavaScript, React, and React Native</strong>, and I'm always trying to expand my skills.

                    <br /><br />

                    Outside of programming, I'm someone who enjoys getting completely absorbed in the things I like.
                    I'm a huge fan of <strong>video games</strong>, especially <strong>Devil May Cry</strong>.
                    I love its characters, combat, music, and the insane style of the series.
                    <strong>God of War, Red Dead Redemption 2, Resident Evil,</strong> and <strong>Counter-Strike</strong>
                    are also games I enjoy.

                    <br /><br />

                    I'm also a big fan of television and storytelling.
                    Some of my favorite series are <strong>House M.D., Game of Thrones,</strong> and
                    <strong>Better Call Saul</strong>.
                    I enjoy stories with complicated characters, strong writing, clever decisions,
                    and worlds that actually feel worth getting invested in.

                    <br /><br />

                    Music is another important part of my interests.
                    I have my own music that I share online, and if you'd like to hear it,
                    you can find it on my <strong><a href="https://t.me/mr2470music" target="_blank" rel="noreferrer">music channel</a></strong>.

                    <br /><br />

                    I'm naturally interested in <strong>technology, computers, mathematics, problem solving, and learning new things</strong>.
                    I like understanding things deeply instead of just knowing how to use them.
                    Whether I'm learning a new programming concept, working on a project, or exploring something completely unrelated,
                    I tend to keep digging until I understand it.

                    <br /><br />

                    I also enjoy <strong>building things from the ground up</strong>.
                    A lot of what I learn comes from actually making something rather than simply reading about it.
                    Projects give me a reason to experiment, make mistakes, solve problems, and improve.
                    That's one of the reasons I enjoy programming so much.

                    <br /><br />

                    I'm ambitious about my future and have a lot I want to accomplish.
                    I want to keep improving my skills, challenge myself with increasingly difficult problems,
                    and eventually build things that have a real impact.
                    <strong>I'm still at the beginning of my journey, and that's what makes it exciting.</strong>

                    <br /><br />

                    This website is a small representation of who I am and what I'm working toward.
                    It's a place where I can share <strong>what I've built, what I'm learning,
                    the things I enjoy, and where I'm going next.</strong>
                </p>
            </div>
        </div>
        
        </>
    )
}

export default AboutPage