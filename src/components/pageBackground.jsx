import './pageBackground.css'

/*
 * Full-viewport backdrop. It is a fixed element rather than
 * background-attachment: fixed so it behaves the same on iOS Safari,
 * which ignores fixed backgrounds.
 */
function PageBackground({ image, overlay = 0.8 }) {
    return (
        <div
            className="page-bg"
            aria-hidden="true"
            style={{
                backgroundImage: `url(${image})`,
                '--overlay': overlay,
            }}
        />
    )
}

export default PageBackground
