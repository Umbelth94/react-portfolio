export default function Card({title, subtitle, image, link}) {
    const cardStyle = {
        backgroundImage: `url(${image})`,
    };

    return (
            <a href={link} className ='card p0' style={cardStyle}>
                <img 
                    className='card-img'
                    src={image}
                    alt={title}
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