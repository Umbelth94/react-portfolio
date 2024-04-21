export default function Card({title, subtitle, image, link}) {

    return (
            <a href={link} className ='card p0 text-black position-relative overflow-hidden'>
                <img 
                    className='card-img opacity-75'
                    src={image}
                    alt={title}
                    style={{objectFit: 'cover', width: '100%', height:'100%'}}
                    
                />
                <div className='card-img-overlay '>
                    <h5 className='card-title'>
                        {title}
                    </h5>
                    <p className='card-text'>{subtitle}</p>
                    
                </div>
            </a>

    )
}