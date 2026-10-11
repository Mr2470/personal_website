import Nav from '../../components/nav'
import PageBackground from '../../components/pageBackground'
import './contact.css'

const links = [
    {
        label: 'Email',
        value: 'Mr2470iscool@gmail.com',
        href: 'mailto:Mr2470iscool@gmail.com',
    },
    {
        label: 'GitHub',
        value: 'Mr2470 GitHub',
        href: 'https://github.com/Mr2470',
        external: true,
    },
]

function Contact() {
    return (
        <>
            <PageBackground image="/beautiful-morning-in-forest-4k-4l-2560x1440.jpeg" />

            <Nav />

            <main className="page contact">
                <h1 className="contact__title">Contact Me</h1>
                <p className="contact__lead">
                    Want to talk about a project, ask something, or just say
                    hi? I&apos;m easiest to reach by email.
                </p>

                <ul className="contact__list">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                className="contact__card"
                                href={link.href}
                                {...(link.external
                                    ? {
                                          target: '_blank',
                                          rel: 'noopener noreferrer',
                                      }
                                    : {})}
                            >
                                <span className="contact__label">
                                    {link.label}
                                </span>
                                <span className="contact__value">
                                    {link.value}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}

export default Contact
