import { Card } from 'react-bootstrap';
import "./CardMovie.css"
import { Link } from 'react-router-dom';

export default function CardMovie(props) {
    const handleMouseEnter = (e) => {
        const cardText = e.currentTarget.querySelector('.card-text');
        cardText.classList.remove('hidden-text');
        cardText.classList.remove('fade-out');
        cardText.classList.add('fade-in');
    };

    const handleMouseLeave = (e) => {
        const cardText = e.currentTarget.querySelector('.card-text');
        cardText.classList.remove('fade-in');
        cardText.classList.add('fade-out');
        setTimeout(() => {
            cardText.classList.add('hidden-text');
        }, 500);
    };

    return (
        <Card className="bg-dark text-white w-50 mb-5 cardMovie" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id={props.id}>
            <Card.Img className='cardImg' src={props.img} alt="Card image" style={{ maxWidth: '100%' }} />
            <Card.ImgOverlay>
                <Card.Title className='cardTitle'><h1>{props.title}</h1></Card.Title>
                <Card.Text className='cardText hidden-text fade-in'>
                    {props.description}
                </Card.Text>
                <div className='d-flex cardFlexContain'>
                </div>
                <Link to={ `/detalle/${props.id}` }>
                <button className='btn btn-primary w-50'>Ver mas</button>
                </Link>
            </Card.ImgOverlay>
        </Card>
    )
}