import '../styles/Card.css'
import qrImage from '../assets/image-qr-code.png'

const QrCard = (props) => {
    const {title, description} = props;
    
    return (
        <div className="card">
            <img src={qrImage} alt="pic" className="card__image"/>
            <div className="card__content">
                <h2 className="card__title">{title}</h2>
                <p className="card__description">{description}</p>
            </div>
        </div>
    )
}

export default QrCard;