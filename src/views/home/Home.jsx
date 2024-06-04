import React from 'react'
import './home.css';


 const Home = () => {
  return (
    <div>
    <div className="home-container">
       <br></br>
        <h1 className= "title"> ¡Bienvenido al paraíso vegano en el corazón de la ciudad!</h1>
        <p> En nuestro restaurante, celebramos el arte de la comida vegana con cada plato que servimos.
        Cada bocado es una experiencia gastronómica llena de sabor, frescura y creatividad.
        Imagina un menú repleto de delicias que no solo nutren tu cuerpo, sino que también te inspiran. Desde nuestros entrantes frescos y crujientes hasta nuestros platos principales llenos de textura y aroma, cada elección es una aventura culinaria que deleitará tus sentidos.</p> 
        
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxm_rrob3gIV_NIR8RSKc_NGH2dIq2VWrVEA&s' alt="Imagen del restaurante" className="restaurant-image"/>
      <p>Nuestra misión es ofrecer algo más que solo comida; queremos compartir un estilo de vida que promueve la salud, el bienestar y el respeto por nuestro planeta. En cada plato, encontrarás ingredientes cuidadosamente seleccionados, cultivados localmente y sostenibles, para que puedas disfrutar de una comida que nutre tanto tu cuerpo como tu conciencia.</p>
        <p>Ya sea que seas un vegano comprometido, un curioso culinario o simplemente alguien que busca una experiencia gastronómica excepcional, te invitamos a unirte a nosotros en este viaje hacia un mundo de sabores frescos, vibrantes y totalmente veganos.</p>
        <p>¡Ven y descubre el encanto de la comida vegana en nuestro restaurante hoy mismo!</p>
   
    </div>
    </div>

    
  )
}
export default Home;