import './Project.css'

export default function Card({title, subtitle, image, link, liveLink}) {

    return (
            <div className ='card p0 text-black position-relative overflow-hidden'>
                <img 
                    className='card-img opacity-75'
                    src={image}
                    alt={title}
                    style={{objectFit: 'cover', width: '100%', height:'100%'}}
                    
                />
                <div className='card-img-overlay '>
                    <a href={liveLink}>
                        <h5 className='card-title'>
                        {title}
                        </h5>
                    </a>
                    <a href={link}>
                        <p className='card-text'>{subtitle}</p>
                    </a>
                </div>
            </div>

    )
}