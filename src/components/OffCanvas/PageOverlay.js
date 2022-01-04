export default function PageOverlay(props) {
    return <div className={`mobile-nav-overlay fullscreen ${props.shown ? 'show' : ''}`} onClick={props.togglerHandler}></div>
}