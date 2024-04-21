import gitCat from '../assets/images/github-mark.png'
import linkedIn from '../assets/images/LI-In-Bug.png'
export default function Footer(){

    return (
        <footer className='d-flex justify-content-center'>
            <a href="https://github.com/Umbelth94"><img src={gitCat} className = 'logo'/></a>
            <a href="https://www.linkedin.com/in/travis-umbel-1368652b1/"><img src={linkedIn} className='logo'/></a>
        </footer>
    )
}