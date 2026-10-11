import Nav from '../../components/nav'
import PageBackground from '../../components/pageBackground'
import './about.css'

function AboutPage() {
    return (
        <>
            <PageBackground image="/misty-forest-mountains-with-lush-green-trees-dd-2560x1440.jpeg" />

            <Nav />

            <main className="page">
                <article className="prose">
                    <h1 className="prose__title">About me</h1>

                    <p>
                        I&apos;m <strong>Arta</strong>, a developer, problem
                        solver, and someone who has always been curious about
                        how things work. I&apos;ve been programming for years,
                        and over time, it has become much more than just a skill
                        for me. I love taking an idea, breaking it down, solving
                        the difficult parts, and turning it into something real.
                    </p>

                    <p>
                        A big part of who I am comes from the people closest to
                        me, especially my parents,
                        <strong> Zahra and Farshad</strong>. Their support has
                        given me the confidence to pursue what I&apos;m
                        passionate about, challenge myself, and keep moving
                        forward.{' '}
                        <strong>
                            They are a big part of the person I am today.
                        </strong>
                    </p>

                    <p>
                        My curiosity is one of the biggest reasons I love
                        programming. When I find something I don&apos;t
                        understand, I want to know{' '}
                        <strong>
                            how it works, why it works, and whether I can build
                            it myself.
                        </strong>{' '}
                        I learn best by creating real projects and experimenting
                        with new ideas. I work with{' '}
                        <strong>
                            Python, JavaScript, React, and React Native
                        </strong>
                        , and I&apos;m always trying to expand my skills.
                    </p>

                    <p>
                        Outside of programming, I&apos;m someone who enjoys
                        getting completely absorbed in the things I like.
                        I&apos;m a huge fan of <strong>video games</strong>,
                        especially <strong>Devil May Cry</strong>. I love its
                        characters, combat, music, and the insane style of the
                        series.{' '}
                        <strong>
                            God of War, Red Dead Redemption 2, Resident Evil,
                        </strong>{' '}
                        and <strong>Counter-Strike</strong> are also games I
                        enjoy.
                    </p>

                    <p>
                        I&apos;m also a big fan of television and storytelling.
                        Some of my favorite series are{' '}
                        <strong>House M.D., Game of Thrones,</strong> and{' '}
                        <strong>Better Call Saul</strong>. I enjoy stories with
                        complicated characters, strong writing, clever
                        decisions, and worlds that actually feel worth getting
                        invested in.
                    </p>

                    <p>
                        Music is another important part of my interests. I have
                        my own music that I share online, and if you&apos;d like
                        to hear it, you can find it on my{' '}
                        <strong>
                            <a
                                href="https://t.me/mr2470music"
                                target="_blank"
                                rel="noreferrer"
                            >
                                music channel
                            </a>
                        </strong>
                        .
                    </p>

                    <p>
                        I&apos;m naturally interested in{' '}
                        <strong>
                            technology, computers, mathematics, problem solving,
                            and learning new things
                        </strong>
                        . I like understanding things deeply instead of just
                        knowing how to use them. Whether I&apos;m learning a new
                        programming concept, working on a project, or exploring
                        something completely unrelated, I tend to keep digging
                        until I understand it.
                    </p>

                    <p>
                        I also enjoy{' '}
                        <strong>building things from the ground up</strong>. A
                        lot of what I learn comes from actually making something
                        rather than simply reading about it. Projects give me a
                        reason to experiment, make mistakes, solve problems, and
                        improve. That&apos;s one of the reasons I enjoy
                        programming so much.
                    </p>

                    <p>
                        I&apos;m ambitious about my future and have a lot I want
                        to accomplish. I want to keep improving my skills,
                        challenge myself with increasingly difficult problems,
                        and eventually build things that have a real impact.{' '}
                        <strong>
                            I&apos;m still at the beginning of my journey, and
                            that&apos;s what makes it exciting.
                        </strong>
                    </p>

                    <p>
                        This website is a small representation of who I am and
                        what I&apos;m working toward. It&apos;s a place where I
                        can share{' '}
                        <strong>
                            what I&apos;ve built, what I&apos;m learning, the
                            things I enjoy, and where I&apos;m going next.
                        </strong>
                    </p>
                </article>
            </main>
        </>
    )
}

export default AboutPage
