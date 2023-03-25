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
                <Card.Text className='cardDirector'>Direct by {props.direction}</Card.Text>
                <Card.Text className='cardRating'><h1>Rating: {props.ranking}</h1></Card.Text>
                </div>
                <Link to={ `/detalle/${props.id}` }>
                <button className='btn btn-dark'>Ver mas</button>
                </Link>
            </Card.ImgOverlay>
        </Card>
    )
}