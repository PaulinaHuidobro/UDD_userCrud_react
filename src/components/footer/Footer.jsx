import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Footer.css';

export const Footer = () => {

  return (
  <Card className="footer-card">
  
  <Card.Body>
    <Card.Title className="footer-title"></Card.Title>
    <Card.Text className="footer-text">
      <p>siguenos en nuestras redes sociales</p>
      <img src="https://img.icons8.com/?size=100&id=32292&format=png" alt="Imagen icons" className="footer-img"></img> 
      <img src="https://img.icons8.com/?size=100&id=z6gJ8gyjaapn&format=png&color=000000" className="footer-img"></img>
      <img src="https://img.icons8.com/?size=100&id=9foSA61V9037&format=png&color=000000" className="footer-img"></img>
      <img src='https://img.icons8.com/?size=100&id=53438&format=png&color=000000'alt="Imagen icons" className="footer-img"></img>
      <h6></h6>
      <p>Llamanos al (+56)976523412</p>
      
    </Card.Text>
    
  </Card.Body>
</Card>
);
}