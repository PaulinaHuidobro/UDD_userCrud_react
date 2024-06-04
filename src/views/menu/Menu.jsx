import React from 'react'
import './menu.css';

 const Menu = () => {
  return (
    
  <div className="menu-wrapper">
    <div className="card-row">
    <div className="card">
        <h1 className= "card-title">Ensalada de Quinoa y Vegetales Asados</h1>
        <img src='https://www.recetaslider.cl/wp-content/uploads/2021/06/principal_5cb62f13ceb97.jpg' alt="Imagen del restaurante" className="restaurant-image"/>
        <div className='card-body'>
        <p>Una mezcla de quinoa cocida, vegetales asados como pimientos,
        calabacines y berenjenas, aderezada con una vinagreta 
        de limón y hierbas frescas.</p>
     </div>
  </div>

  <div className="card">
      <h2 className= "card-title">Hamburguesa de Lentejas y Remolacha</h2>
      <img src='https://storage.googleapis.com/avena-recipes/agtzfmF2ZW5hLWJvdHIZCxIMSW50ZXJjb21Vc2VyGICAgMW2rJ8LDA/24-04-2020/1587767770012.jpeg' alt="Imagen del restaurante" className="restaurant-image"/>
      <div className='card-body'>
        <p> Una hamburguesa vegana hecha con una base de lentejas
        y remolacha, sazonada con especias y hierbas,
        servida en un pan integral con lechuga,
        tomate y una salsa de aguacate.</p>
      </div>
    </div>
    <div className='card'>
    <h6 className= "card-title">Curry de Garbanzos y Verduras</h6>
      <img src='https://www.gourmet.cl/wp-content/uploads/2022/08/curry-de-garbanzos-ajustada-web-570x458.jpg' alt="Imagen del restaurante" className="restaurant-image"/>
      <div className='card-body'>
        <p>Un curry aromático hecho con garbanzos cocidos,
        verduras como espinacas, zanahorias y patatas,
        cocinadas en una salsa de curry cremosa 
         a base de leche de coco y especias.</p>
      </div>
    </div>
    </div>

    <div className="card-row">
      <div className="card">
      <h2 className= "card-title">Tacos de Hongos Portobello</h2>
      <img src='https://previews.123rf.com/images/islandleigh/islandleigh1409/islandleigh140900094/31676473-tacos-llenos-de-hongos-portobello-asados-calabac%C3%ADn-y-cebolla-morada-con-tomates-cherry-cilantro-y.jpg' alt="Imagen del restaurante" className="restaurant-image"/>
         <div className='card-body'>
         <p> Hongos portobello marinados y asados,
         servidos en tortillas de maíz con guacamole,
         pico de gallo y una salsa picante. </p>
      </div>
    </div>

 <div className="card">
    <h2 className= "card-title">Pad Thai Vegano</h2>
      <img src='https://www.healthybarta.com/wp-content/uploads/2020/02/pad-thai-vegano-750x500.png' alt="Imagen del restaurante" className="restaurant-image"/>
   <div className='card-body'>
      <p>Fideos de arroz salteados con tofu,
      brotes de soja, cacahuetes y verduras frescas
      en una salsa de tamarindo y maní.</p>
      </div>
    </div>
  
      <div className="card">
      <h2 className= "card-title">Pizza Vegetariana sin Queso</h2>
      <img src='https://cdn.shopify.com/s/files/1/0191/9978/files/Pizza-Veggie-Supreme-blog.jpg?v=1652775259' alt="Imagen del restaurante" className="restaurant-image"/>
      <div className='card-body'>
      <p>Una pizza de masa crujiente
      cubierta con salsa de tomate,
      una variedad de verduras como champiñones,
      pimientos, cebollas y aceitunas, y hierbas frescas.</p>
      </div>
    </div>
    </div>
 
  <div className="card-row">
      <div className="card">
      <h2 className= "card-title">Risotto de Champiñones</h2>
      <img src='https://recetarisotto.es/img/elaboracion-risotto-de-champin-ones-163-24788.webp' alt="Imagen del restaurante" className="restaurant-image"/>
      <div className='card-body'>
      <p>Arroz arborio cocido lentamente en caldo vegetal
      con champiñones salteados, ajo, cebolla y vino blanco,
      terminado con una pizca de levadura nutricional
      para un sabor a queso.</p>
      </div>
    </div>

      <div className="card">
        <h2 className= "card-title">Sushi Vegano</h2>
        <img src='https://www.comedera.com/wp-content/uploads/2023/03/sushi-vegetariano.jpg' alt="Imagen del restaurante" className="restaurant-image"/>
        <div className='card-body'>
         <p>Rollos de sushi rellenos de vegetales frescos
         como pepino, aguacate, zanahoria y tofu,
         envueltos en alga nori y arroz
         sazonado con vinagre de arroz.</p>
        </div>
      </div>
    
    <div className="card">
    <h2 className= "card-title">Bowl de Buddha</h2>
      <img src='https://www.eatingbirdfood.com/wp-content/uploads/2022/04/buddha-bowl-hero-633x950.jpg' alt="Imagen del restaurante" className="restaurant-image"/>
      <div className='card-body'> 
      <p>Un bowl nutritivo con una base de arroz integral
      o quinoa, acompañado de vegetales al vapor,
      aguacate en rodajas, garbanzos asados,
      semillas de sésamo y una vinagreta de tahini.</p>
      </div>
    </div>
    </div>
  </div>  
 );
}
export default Menu;