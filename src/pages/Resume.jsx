import resume from '../assets/images/Travis-Umbel-Resume.pdf'

export default function Resume(){


    return (
        <div className = "container-fluid content">
            <h2>Resume</h2>
             <embed src={resume} width='800px' height='1200px'></embed>
            </div>
    )
}
