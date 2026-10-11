import Nav from '../../components/nav'
import PageBackground from '../../components/pageBackground'
import './projects.css'

/*
 * Projects shown on this page.
 *
 * TODO(Mr2470): the Telo copy below is a first draft written without any
 * details about the project - replace `tagline`, `description` and `status`
 * with your own words, and add entries to `tech` if you want stack chips.
 * To add another project later, just add another object to this array.
 */
const projects = [
    {
        name: 'Telo',
        tagline: 'An idea I keep building on',
        status: 'In progress',
        description: [
            "Telo is one of my own projects, built from the ground up - the idea, the design, and the code. It started as a problem I wanted solved properly, and it has turned into the place where I push myself hardest as a developer: taking a big idea apart, working through the parts I don't know yet, and turning it into something that actually works instead of a half-finished draft.",
            "It is still evolving. I keep coming back to it to improve how it works, clean up the pieces I rushed the first time, and learn whatever the next part of it demands.",
        ],
        tech: [],
        links: [],
    },
]

function ProjectsPage() {
    return (
        <>
            <PageBackground image="/a-forest-filled-with-lots-of-trees-covered-in-fog-jg-2560x1440.jpeg" />

            <Nav />

            <main className="page projects">
                <h1 className="projects__title">Projects</h1>
                <p className="projects__lead">
                    Things I&apos;ve built and things I&apos;m still building -
                    mostly to learn how something works, and to see whether I
                    can build it myself.
                </p>

                <ul className="projects__list">
                    {projects.map((project) => (
                        <li key={project.name}>
                            <article className="project-card">
                                <div className="project-card__head">
                                    <h2 className="project-card__name">
                                        {project.name}
                                    </h2>
                                    {project.status && (
                                        <span className="project-card__status">
                                            {project.status}
                                        </span>
                                    )}
                                </div>

                                {project.tagline && (
                                    <p className="project-card__tagline">
                                        {project.tagline}
                                    </p>
                                )}

                                {project.description.map((paragraph) => (
                                    <p
                                        key={paragraph}
                                        className="project-card__text"
                                    >
                                        {paragraph}
                                    </p>
                                ))}

                                {project.tech.length > 0 && (
                                    <ul className="project-card__tech">
                                        {project.tech.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                )}

                                {project.links.length > 0 && (
                                    <div className="project-card__links">
                                        {project.links.map((link) => (
                                            <a
                                                key={link.href}
                                                className="project-card__link"
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </article>
                        </li>
                    ))}
                </ul>

                <a
                    className="projects__github"
                    href="https://github.com/Mr2470"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    More of my work on GitHub
                    <span aria-hidden="true"> &rarr;</span>
                </a>
            </main>
        </>
    )
}

export default ProjectsPage
